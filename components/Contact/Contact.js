import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.page_title}>CONTACT_ME</div>
      <div className={styles.link_container}>
        <a className={styles.contact_link} href="https://github.com/jhcode14">
          GitHub
        </a>
        <a
          className={styles.contact_link}
          href="https://www.linkedin.com/in/jason-hsu-ucsd/"
        >
          LinkedIn
        </a>
        <a
          className={styles.contact_link}
          href="https://www.instagram.com/jhsu_14/"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
