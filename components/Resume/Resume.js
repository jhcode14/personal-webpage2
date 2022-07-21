import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={styles.about}>
      <div className={styles.page_title}>MY_RESUME</div>
      <div className={styles.download_container}>
        <a
          className={styles.download_button}
          href="/Jason_Hsu_Resume.pdf"
          download
        >
          Resume (PDF)
        </a>
      </div>
    </div>
  );
}
