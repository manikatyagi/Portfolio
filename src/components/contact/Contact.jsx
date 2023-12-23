
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    // footer
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:manika.tyagi09@gmail.com">manika.tyagi09@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/manika-tyagi-b13a0a218/">linkedin.com/manikatyagi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/manikatyagi">github.com/manikatyagi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode.png")} alt="leetcode icon" />
          <a href="https://leetcode.com/ManikaTyagi_VIT24/">leetcode.com/manikatyagi</a>
        </li>
      </ul>
    </footer>
  );
};