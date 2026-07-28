import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listSkills from "./tools/list-skills";
import listExperience from "./tools/list-experience";
import listProjects from "./tools/list-projects";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "ahmedms-portfolio-mcp",
  title: "Ahmed Muhammed Seid — Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for the portfolio of Ahmed Muhammed Seid (AhmedMS), a Software Developer & Project Manager in Addis Ababa, Ethiopia. Use `get_profile` for an overview, `list_skills` for technical and management skills, `list_experience` for work history, `list_projects` for built work, and `get_contact_info` for how to reach him and his availability.",
  tools: [getProfile, listSkills, listExperience, listProjects, getContactInfo],
});
