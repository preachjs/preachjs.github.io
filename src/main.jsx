import { hydrate, render } from "preact";
import {
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
  lazy,
  prerender as ssr,
} from "preact-iso";
import { routes } from "~routes";
import "./index.css";

const PageRoutes = () => {
  return <Router>{mapPagesToRoutes(routes)}</Router>;
};

const Main = () => {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <PageRoutes />
      </ErrorBoundary>
    </LocationProvider>
  );
};

export const prerender = async (data) => {
  const { html, links: discoveredLinks } = await ssr(<Main />);
  return {
    html,
    links: new Set([...discoveredLinks]),
    data: { url: data.url },
    head: {
      lang: "en",
      title: "PreachJS | Tiny preact libraries",
      elements: new Set([]),
    },
  };
};

if (typeof window !== "undefined") {
  const mounter = import.meta.env.PROD ? hydrate : render;
  mounter(<Main />, document.getElementById("app"));
}

function mapPagesToRoutes(routes) {
  const routeComponents = [];
  for (const route of routes) {
    routeComponents.push(
      <Route path={route.routePath} component={lazy(() => route.module())} />
    );
  }
  return routeComponents;
}
