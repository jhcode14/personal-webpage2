import { useState, useEffect } from "react";
import styles from "./View.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

export default function View() {
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

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.view_navblock}>
          <div className={styles.view_title}>USER: JASON HSU</div>
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
        {pageToRender}
      </div>
    </div>
  );
}
