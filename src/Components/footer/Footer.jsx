import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { navLinks } from "../nav/Nav";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link to={navLinks.home.url} className={styles.footer__link}>
        {navLinks.home.text}
      </Link>
      <Link to={navLinks.about.url} className={styles.footer__link}>
        {navLinks.about.text}
      </Link>
      <Link to={navLinks.portfolio.url} className={styles.footer__link}>
        {navLinks.portfolio.text}
      </Link>
      <Link to={navLinks.contact.url} className={styles.footer__link}>
        {navLinks.contact.text}
      </Link>
    </div>
  );
}
