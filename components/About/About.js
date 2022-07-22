import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.page_title}>ABOUT_ME</div>
      <div className={styles.about_content}>
        <p className={styles.self_desc}>
          Hi, I&apos;m Jason. I am currently studying at UC San Diego, pursuing
          B.S. in Machine Learning and a minor in Computer Science. I am
          currently a full-time SWE Intern working at Viasat for the Summer of
          2022. Before transferring to UC San Diego, I studied at UC Riverside.
          Through working at an emergency department, researching at UCR School
          of Medicine stroke lab, and volunteering at the local community. I
          learned to manage time wisely, deal with unexpected problems and be a
          team-oriented person. In my spare time, I enjoy playing guitar and
          online games with friends. I also enjoy photography and running (I
          look forward to running a half-marathon in the near future!). I like
          to try new food and meet new people, so feel free to reach out! You
          can reach me through the social websites below!
        </p>
      </div>
    </div>
  );
}
