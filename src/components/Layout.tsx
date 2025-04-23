import React, { useEffect, useLayoutEffect, useRef } from "react";
import Footer from "./Footer";
// import Head from "./Head";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mainRef.current !== null) {
      mainRef.current.style.flexDirection = "column-reverse";
    }
  }, [mainRef.current]);

  return (
    <>
      {/* <Head /> */}
      <div className={styles.backgroundContainer}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className={styles.outerContainer} id="outer">
        <main ref={mainRef} className={styles.mainContainer}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
