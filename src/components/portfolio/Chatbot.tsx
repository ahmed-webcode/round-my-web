import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { MessageCircle, Send, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const STORAGE_KEY = "ahmedbot:messages:v1";

function loadStoredMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Drop malformed or empty assistant turns left by interrupted streams.
    return (parsed as UIMessage[]).filter(
      (m) =>
        m && Array.isArray(m.parts) &&
        (m.role === "user" || m.parts.some((p) => p.type === "text" && p.text)),
    );
  } catch {
    return [];
  }
}

const SUGGESTIONS = [
  "What are Ahmed's top skills?",
  "Tell me about his experience.",
  "Is he available for hire?",
  "What projects has he built?",
];

// Replies arrive as plain text with light markdown. Render emphasis as real
// formatting instead of showing raw asterisks to the visitor.
function renderRich(text: string): ReactNode {
  const clean = text
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\((?:https?:\/\/[^\s)]+)\)/g, "$1");
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of clean.matchAll(/(\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g)) {
    const at = match.index ?? 0;
    if (at > last) nodes.push(clean.slice(last, at));
    const token = match[0];
    const bold = token.startsWith("**");
    const body = bold ? token.slice(2, -2) : token.slice(1, -1);
    nodes.push(
      bold ? (
        <strong key={key++} className="font-semibold">
          {body}
        </strong>
      ) : (
        <em key={key++}>{body}</em>
      ),
    );
    last = at + token.length;
  }
  if (last < clean.length) nodes.push(clean.slice(last));
  return nodes.length ? nodes : clean;
}

// Retries only when the request never reached the AI (network drop or server
// restart), so a retry can't double-charge. Up to 3 attempts with backoff.
async function resilientFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await new Promise((r) => setTimeout(r, 800 * 2 ** (attempt - 1)));
    if (init?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    try {
      const res = await fetch(input, init);
      if (res.status === 502 || res.status === 503 || res.status === 504) {
        lastError = new Error(`Server unavailable (${res.status})`);
        continue;
      }
      return res;
    } catch (err) {
      if ((err as Error)?.name === "AbortError") throw err;
      lastError = err;
      console.error("[AhmedBot] request failed, attempt", attempt + 1, err);
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Network error");
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const transport = useMemo(() => {
    // Copies hosted outside Lovable (e.g. Vercel) have no AI key, so they use the Lovable-hosted bot.
    const host = typeof window === "undefined" ? "" : window.location.hostname;
    const local = !host || host === "localhost" || host.endsWith(".lovable.app") || host.endsWith(".lovableproject.com");
    const api = local ? "/api/chat" : "https://ahmedms.lovable.app/api/chat";
    return new DefaultChatTransport({ api, fetch: resilientFetch });
  }, []);
    const { messages, sendMessage, status, setMessages, error, regenerate, clearError } = useChat({
    transport,
    onError: (err) => console.error("[AhmedBot] chat error", err),
  });
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const stored = loadStoredMessages();
    if (stored.length) setMessages(stored);
    setHydrated(true);
  }, [setMessages]);

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (typeof window === "undefined" || !hydrated || status === "streaming" || status === "submitted") return;
    try {
      if (messages.length === 0) {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      }
    } catch {
      // ignore quota/serialization errors
    }
  }, [messages, status, hydrated]);

  const clearHistory = () => {
    setMessages([]);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    }
  };

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    if (error) clearError();
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Chat with Ahmed's AI"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed inset-x-2 bottom-[5.5rem] top-[max(0.5rem,env(safe-area-inset-top))] z-50 flex flex-col sm:inset-x-auto sm:top-auto sm:h-[min(600px,calc(100dvh-8rem))] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:right-6">
          <div className="flex items-center gap-3 border-b border-border bg-gradient-primary/10 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-white">
              A
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Ahmed's AI</p>
              <p className="text-xs text-muted-foreground">Ask about my skills & work</p>
            </div>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearHistory}
                aria-label="Clear chat history"
                className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <Trash2 size={15} />
              </button>
            )}
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Hi! I'm Ahmed's AI assistant. Ask me anything about his skills, projects,
                  or how to work with him.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => submit(s)}
                      className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      isUser
                        ? "rounded-br-sm bg-gradient-primary text-primary-foreground"
                        : "rounded-bl-sm bg-white/5 text-foreground"
                    }`}
                  >
                    {text ? renderRich(text) : (
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {error && (
              <div role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-xs text-foreground">
                <p>The reply didn't come through. Tap Retry to try again.</p>
                <p className="mt-1 text-muted-foreground">{error.message.slice(0, 160)}</p>
                <button type="button" onClick={() => { clearError(); regenerate(); }} className="mt-2 font-semibold text-primary underline">
                  Retry
                </button>
              </div>
            )}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-white/5 px-4 py-2.5 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ahmed..."
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-base outline-none sm:text-sm placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-white transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
