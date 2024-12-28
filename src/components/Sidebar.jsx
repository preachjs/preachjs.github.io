import { useEffect, useState } from "preact/hooks";

export function Sidebar({ items = [], initialValue = "" } = {}) {
  const [activeKey, setActiveKey] = useState(initialValue);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    if (hash != activeKey) {
      setActiveKey(hash.replace(/^#/, ""));
    }
  }, []);

  return (
    <ul class="sticky top-[50px] flex flex-col gap-4">
      {items.map((i) => (
        <SidebarItem
          item={i}
          active={i.key == activeKey}
          onPress={() => setActiveKey(i.key)}
        />
      ))}
    </ul>
  );
}

function SidebarItem({ item, active, onPress }) {
  return (
    <li class="w-fit">
      <a href={"/" + item.key} onClick={onPress} class="group text-zinc-600">
        {item.label}
        <span
          class={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black ${
            active ? "max-w-full !bg-zinc-600" : ""
          }`}
        ></span>
      </a>
    </li>
  );
}
