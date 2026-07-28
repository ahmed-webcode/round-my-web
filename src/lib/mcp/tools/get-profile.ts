import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../profile";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Ahmed Muhammed Seid's professional profile: name, title, location, summary, languages, and availability.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      name: profile.name,
      alternateNames: profile.alternateNames,
      title: profile.title,
      location: profile.location,
      summary: profile.summary,
      website: profile.website,
      languages: profile.languages,
      availability: profile.availability,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
