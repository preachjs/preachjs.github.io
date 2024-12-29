const contentMap = {};
const posts = import.meta.glob("./**/*.mdx", { eager: true });
for (let i in posts) {
  contentMap[i] = "default" in posts[i] ? posts[i].default : posts[i];
}

export const sideBar = {
  introduction: {
    order: 1,
    label: "Introduction",
    source: contentMap["./introduction.mdx"],
    key: "introduction",
  },
  essentials: {
    order: 2,
    label: "Essentials",
    source: contentMap["./essentials.mdx"],
    key: "essentials",
  },
  aesthetics: {
    order: 3,
    label: "Aesthetics",
    source: contentMap["./aesthetics.mdx"],
    key: "aesthetics",
  },
  "developer-experience": {
    order: 4,
    label: "Developer Experience",
    source: contentMap["./developer-experience.mdx"],
    key: "developer-experience",
  },
  frameworks: {
    order: 5,
    label: "Frameworks",
    source: contentMap["./frameworks.mdx"],
    key: "frameworks",
  },
  templates: {
    order: 6,
    label: "Templates",
    source: contentMap["./templates.mdx"],
    key: "templates",
  },
};
