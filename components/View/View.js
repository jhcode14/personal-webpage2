import { useState, useEffect } from "react";

import Head from "next/head";

import { JSONTree } from "react-json-tree";

import styles from "./View.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

export default function View({ userData }) {
  const [visiblePage, setVisiblePage] = useState();
  const [pageToRender, setPageToRender] = useState(false);

  const handlePageRender = () => {
    switch (visiblePage) {
      case "PAGE_ABOUT":
        setPageToRender(<About />);
        break;
      case "PAGE_PROJECTS":
        setPageToRender(<Projects />);
        break;
      case "PAGE_RESUME":
        setPageToRender(<Resume />);
        break;
      case "PAGE_CONTACT":
        setPageToRender(<Contact />);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handlePageRender();
  }, [visiblePage]);

  const handlePageButton = (e) => {
    setVisiblePage(e.target.value);
  };

  const theme = {
    scheme: "monokai",
    author: "wimer hazenberg (http://www.monokai.nl)",
    base00: "#000000",
    base01: "#383830",
    base02: "#49483e",
    base03: "#75715e",
    base04: "#a59f85",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#a6e22e",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
  };

  return (
    <div className={styles.view}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/nne1ftw.css" />
      </Head>
      <div className={styles.container}>
        <div className={styles.view_leftblock}>
          <div className={styles.view_navblock}>
            <div className={styles.view_title}>USER: JASON_HSU</div>
            <div className={styles.view_navblock_button_container}>
              <button
                value="PAGE_ABOUT"
                onClick={handlePageButton}
                className={styles.view_button}
              >
                ABOUT_ME
              </button>
              <button
                value="PAGE_PROJECTS"
                onClick={handlePageButton}
                className={styles.view_button}
              >
                MY_PROJECTS
              </button>
              <button
                value="PAGE_RESUME"
                onClick={handlePageButton}
                className={styles.view_button}
              >
                MY_RESUME
              </button>
              <button
                value="PAGE_CONTACT"
                onClick={handlePageButton}
                className={styles.view_button}
              >
                CONTACT_ME
              </button>
            </div>
          </div>
          <div className={styles.view_apiblock}>
            <div className={styles.apiblock_title}>QUERY_USER</div>
            <div className={styles.apiblock_data}>
              <JSONTree data={userData} theme={theme} invertTheme={true} />
            </div>
          </div>
        </div>
        {pageToRender}
      </div>
    </div>
  );
}
