import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { MessageCircle, Send, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "ahmedbot:messages:v1";

function loadStoredMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as UIMessage[]) : [];
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

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status } = useChat({ transport });
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
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
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(600px,calc(100vh-8rem))] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:right-6">
          <div className="flex items-center gap-3 border-b border-border bg-gradient-primary/10 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-white">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Ahmed's AI</p>
              <p className="text-xs text-muted-foreground">Ask about my skills & work</p>
            </div>
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
                        ? "rounded-br-sm bg-gradient-primary text-white"
                        : "rounded-bl-sm bg-white/5 text-foreground"
                    }`}
                  >
                    {text || (
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
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
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
