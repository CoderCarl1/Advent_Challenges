import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import Head from "next/head";

export function Layout({ children }) {
  return (
    <div className="bounding__container container">
      <Head>
        <title>Advent Challenges App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
