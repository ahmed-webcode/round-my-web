import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../profile";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List the projects Ahmed has built, with stack, links, and descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = profile.projects;
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});
