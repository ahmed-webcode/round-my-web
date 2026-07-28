import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../profile";

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description: "List Ahmed's professional work experience with roles, periods, and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const experience = profile.experience;
    return {
      content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
      structuredContent: { experience },
    };
  },
});
