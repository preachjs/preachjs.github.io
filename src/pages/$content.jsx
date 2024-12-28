import { useRoute } from "preact-iso";
import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";

export default function ContentPage() {
  const route = useRoute();
  const Content = sideBar[route.params.content]?.source || (() => <></>);
  return (
    <BaseLayout sideBarItems={sideBar}>
      <Content />
    </BaseLayout>
  );
}
