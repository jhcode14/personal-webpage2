import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.page_title}>MY_PROJECTS</div>
      <div className={styles.project_block}>
        <h1 className={styles.project_title}>
          Heart Disease Machine Learning Detection
        </h1>
        <p className={styles.project_desc}>
          This project is part of UCSD's Spring 2022 COGS 118A Supervised
          Machine Learning Course. I worked with 4 other members to search for
          ways to better understand the correlation between heart disease and
          common traits and find ways to predict if a patient potentially will
          have risks of having heart disease or not. Methods include Data
          Cleaning, EDA, Logistic Regression, K-Nearest Neighbors, Neuro
          Network, Random Forest, Oversampling, Data Standardization, and Cross
          Validation. Tools: Python, Jupyter Notebook, Scikit-learn, Numpy,
          Pandas, Matplotlib
        </p>
        <a
          href="https://github.com/jhcode14/Heart_Disease_ML_Detection"
          className={styles.project_button}
        >
          View on GitHub
        </a>
      </div>
      <div className={styles.project_block}>
        <h1 className={styles.project_title}>Type 1 Diabetic Care Directive</h1>
        <p className={styles.project_desc}>
          This project is part of UCSD Diabetes Design Initiative and UCSD
          Design Lab's Type 1 Diabetic Care Directive's Fall 2021 Sprint. As a
          frontend developer, I worked with other UCSD Designers and Developers
          to create a website prototype for Type 1 Diabetic Patients to easily
          provide lifesaving informations to medical team during
          life-threatening emergency. Tools: JavaScript/CSS/HTML, React.JS, Antd
        </p>
        <a
          href="https://github.com/jhcode14/t1d-fall2021"
          className={styles.project_button}
        >
          View on GitHub
        </a>
      </div>
      <div className={styles.project_block}>
        <h1 className={styles.project_title}>Costco Item Tracker</h1>
        <p className={styles.project_desc}>
          This project is a local Python-based software that offer users a new
          way to shopping. Where the shoppers can record Costco item catagories
          and compare prices with saved history to determine if the current
          price is optimal. Tools: Python, Tkinter
        </p>
        <a
          href="https://github.com/jhcode14/Costco_Item_Tracker"
          className={styles.project_button}
        >
          View on GitHub
        </a>
      </div>
      <div className={styles.project_block}>
        <h1 className={styles.project_title}>Personal Webpage</h1>
        <p className={styles.project_desc}>
          This project is this website that you are visiting right now! Feel
          free to look at how I built it with the GitHub link above! Tools:
          JavaScript/CSS/HTML, TypeScript, React.JS, Next.JS
        </p>
        <a
          href="https://github.com/jhcode14/personal-webpage"
          className={styles.project_button}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
