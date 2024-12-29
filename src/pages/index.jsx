import { lazy } from "preact-iso";
import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";
import { Suspense } from "preact/compat";

const AllContent = () =>
  Object.keys(sideBar).map((d, i) => {
    const Component = sideBar[d].source;
    const classList = i > 0 ? "mt-12 pt-12" : "";
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component class={classList} />
      </Suspense>
    );
  });

export default function HomePage() {
  return (
    <BaseLayout sideBarItems={sideBar}>
      <AllContent />
    </BaseLayout>
  );
}
