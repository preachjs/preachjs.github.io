import { lazy } from "preact-iso";

export const sideBar = {
  introduction: {
    order: 1,
    label: "Introduction",
    source: lazy(() => import("./introduction.mdx")),
    key: "introduction",
  },
  essentials: {
    order: 2,
    label: "Essentials",
    source: lazy(() => import("./essentials.mdx")),
    key: "essentials",
  },
  aesthetics: {
    order: 3,
    label: "Aesthetics",
    source: lazy(() => import("./aesthetics.mdx")),
    key: "aesthetics",
  },
  "developer-experience": {
    order: 4,
    label: "Developer Experience",
    source: lazy(() => import("./developer-experience.mdx")),
    key: "developer-experience",
  },
  frameworks: {
    order: 5,
    label: "Frameworks",
    source: lazy(() => import("./frameworks.mdx")),
    key: "frameworks",
  },
  templates: {
    order: 6,
    label: "Templates",
    source: lazy(() => import("./templates.mdx")),
    key: "templates",
  },
};
