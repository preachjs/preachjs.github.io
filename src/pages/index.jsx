import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";

const AllContent = () => {
  const components = [];
  let i = -1;
  for (let d in sideBar) {
    i++;
    const Component = sideBar[d].source;
    const classList = i > 0 ? "mt-12 pt-12" : "";
    components.push(<Component class={classList} />);
  }

  return components;
};

export default function HomePage() {
  return (
    <BaseLayout sideBarItems={sideBar}>
      <AllContent />
    </BaseLayout>
  );
}
