import { marked } from "marked";
import { html, render } from "htm/preact";
import { useState, useEffect } from "preact/hooks";

const sideBar = {
  introduction: {
    order: 1,
    label: "Introduction",
    source: "/content/introduction",
    key: "introduction",
  },
  essentials: {
    order: 2,
    label: "Essentials",
    source: "/content/essentials",
    key: "essentials",
  },
  aesthetics: {
    order: 3,
    label: "Aesthetics",
    source: "/content/aesthetics",
    key: "aesthetics",
  },
  "developer-experience": {
    order: 4,
    label: "Developer Experience",
    source: "/content/developer-experience",
    key: "developer-experience",
  },
};

main();

marked.use({ renderer: customHeadingRenderer() });

async function main() {
  const contentRoot = document.querySelector("#article");
  const sidebarRoot = document.querySelector("#sidebar");

  contentRoot.innerHTML = "";
  sidebarRoot.innerHTML = "";

  render(
    html`<${Sidebar}
      items="${Object.values(sideBar).sort((x, y) => x.order - y.order)}"
    />`,
    sidebarRoot
  );

  let storedContent = new Array(Object.keys(sideBar).length);
  const promiseChain = Object.entries(sideBar)
    .sort((x, y) => x[1].order - y[1].order)
    .map(async (entry, index, source) => {
      const [key, value] = entry;
      return fetch(`${value.source}.md`).then(async (d) => {
        if (!d.ok) {
          return;
        }
        const content = await d.text();
        let layoutSpacing = [];
        if (value.order > 1) {
          layoutSpacing.push("mt-12 pt-12");
        } else {
          layoutSpacing.push("mt-0 pt-0");
        }
        if (source.length - 1 == index) {
          layoutSpacing.push("pb-12 mb-12");
        }
        storedContent.push({
          order: value.order,
          content: `<section id="${key}" class="flex flex-col ${layoutSpacing
            .filter(Boolean)
            .join(" ")}">
          ${await marked(content, {})}
        </section>`,
        });
      });
    });

  await promiseChain.reduce((acc, item) => {
    return acc.then((_) => item);
  }, Promise.resolve());

  console.log({ storedContent });
  const usableContent = storedContent
    // .sort((x, y) => x.order - y.order)
    .map((x) => {
      return x.content;
    })
    .join("\n");

  contentRoot.innerHTML = usableContent;
}

function Sidebar({ items = [] } = {}) {
  const [activeKey, setActiveKey] = useState(Object.keys(sideBar)[0]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    if (hash != activeKey) {
      setActiveKey(hash.replace(/^#/, ""));
    }
  }, []);

  return html`
    <ul class="sticky top-[50px] flex flex-col gap-4">
      ${items.map(
        (i) =>
          html`<${SidebarItem}
            item=${i}
            active=${i.key == activeKey}
            onPress=${() => setActiveKey(i.key)}
          />`
      )}
    </ul>
  `;
}

function SidebarItem({ item, active, onPress }) {
  return html`<li class="w-fit">
    <a href="#${item.key}" onClick=${onPress} class="group text-zinc-600"
      >${item.label}
      <span
        class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black ${active
          ? "max-w-full !bg-zinc-600"
          : ""}"
      ></span>
    </a>
  </li>`;
}

function customHeadingRenderer() {
  return {
    heading(text, level) {
      return `<h${level} class="p-0 m-0 pb-4">${text}</h${level}>`;
    },
    paragraph(text) {
      return `<p class="pt-4">${text}</p>`;
    },
  };
}
