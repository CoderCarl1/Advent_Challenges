import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
// Shared Styles
import resetStyles from "~/styles/shared/reset.css";
import designStyles from "~/styles/shared/design.css";
import headerStyles from "~/styles/shared/header.css";
import footerStyles from "~/styles/shared/footer.css";
// Shared Components
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function links() {
  return [
    { rel: "stylesheet", href: resetStyles },
    { rel: "stylesheet", href: designStyles },
    { rel: "stylesheet", href: headerStyles },
    { rel: "stylesheet", href: footerStyles },
  ];
}
export const meta: MetaFunction = () => {
  return { title: "JS & CSS Challenges" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="bounding__container container ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
