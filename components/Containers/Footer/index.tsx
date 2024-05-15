import type { FC } from "react";
import styles from "./index.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.sectionPrimary}>
        <li>Nav item A</li>
        <li>Nav item B</li>
        <li>Nav item C</li>
      </ul>

      <div className={styles.sectionSecondary}>
        <p>&copy; Frontend Jobs</p>
      </div>
    </footer>
  );
};

export default Footer;
