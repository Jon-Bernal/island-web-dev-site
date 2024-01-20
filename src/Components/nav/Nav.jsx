import { Link } from "react-router-dom";
import {
  IconHome2,
  IconUser,
  IconLayoutGrid,
  IconMail,
} from "@tabler/icons-react";
import styles from "./nav.module.css";

export const navLinks = {
  home: {
    url: "/",
    text: "Home",
  },
  about: {
    url: "/about",
    text: "About",
  },
  portfolio: {
    url: "/portfolio",
    text: "Portfolio",
  },
  contact: {
    url: "/contact",
    text: "Contact Me",
  },
};

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link_row}>
        <IconHome2 size="1rem" stroke={1.5} className={styles.nav_icon} />
        <span className={styles.nav_text}>Home</span>
      </Link>
      <Link to="/about" className={styles.link_row}>
        <IconUser size="1rem" stroke={1.5} className={styles.nav_icon} />
        <span className={styles.nav_text}>About</span>
      </Link>
      <Link to="/portfolio" className={styles.link_row}>
        <IconLayoutGrid size="1rem" stroke={1.5} className={styles.nav_icon} />
        <span className={styles.nav_text}>Portfolio</span>
      </Link>
      <Link to="/contact" className={styles.link_row}>
        <IconMail size="1rem" stroke={1.5} className={styles.nav_icon} />
        <span className={styles.nav_text}>Contact</span>
      </Link>
    </nav>
  );
}
