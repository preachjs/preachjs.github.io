import { useLocation } from "preact-iso";

export function Sidebar({ items = [] } = {}) {
  const location = useLocation();

  const activeKey = items.find((d) => "/" + d.key === location.path);

  return (
    <ul class="sticky top-[50px] flex flex-col gap-4">
      {items.map((i) => (
        <SidebarItem item={i} active={activeKey && i.key == activeKey.key} />
      ))}
    </ul>
  );
}

function SidebarItem({ item, active }) {
  return (
    <li class="w-fit">
      <a href={"/" + item.key} class="group text-zinc-600">
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
