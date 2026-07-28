import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { profile } from "../profile";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List Ahmed's technical and project-management skills, optionally filtered to one category.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe(
        "Optional category filter, e.g. 'Programming languages', 'Backend frameworks', 'Frontend', 'Project management'.",
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const all = profile.skills;
    const entries = category
      ? Object.entries(all).filter(([k]) =>
          k.toLowerCase().includes(category.toLowerCase()),
        )
      : Object.entries(all);

    if (entries.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No skill category matched "${category}". Available categories: ${Object.keys(all).join(", ")}.`,
          },
        ],
      };
    }

    const skills = Object.fromEntries(entries);
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: { skills },
    };
  },
});
