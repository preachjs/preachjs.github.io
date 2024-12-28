import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";

const AllContent = () =>
  Object.keys(sideBar).map((d, i) => {
    const Component = sideBar[d]?.source || (() => <></>);
    const classList = i > 0 ? "mt-12 pt-12" : "";
    return <Component class={classList} />;
  });

export default function HomePage() {
  return (
    <BaseLayout sideBarItems={sideBar}>
      <AllContent />
    </BaseLayout>
  );
}
