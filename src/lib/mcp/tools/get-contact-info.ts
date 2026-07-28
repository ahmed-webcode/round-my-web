import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../profile";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Ahmed's public contact channels (email, phone, Telegram, LinkedIn, GitHub) and current availability for work.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = { contact: profile.contact, availability: profile.availability };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
