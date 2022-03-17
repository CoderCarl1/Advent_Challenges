import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";

export function Layout({ children }) {
  useEffect(() => {
    document.querySelector("main").addEventListener("keydown", (e) => {
      console.log("keypressed => ", e.code);
      if (e.shiftKey && e.key === "Tab") {
        document.querySelector(".header__nav").focus();
        console.log("it Happened");
      }
    });
  }, []);

  return (
    <div className="bounding__container container">
      <Header />
      <main tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
