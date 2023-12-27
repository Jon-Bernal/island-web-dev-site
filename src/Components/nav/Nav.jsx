import { NavLink } from "@mantine/core";
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
      <NavLink
        href={navLinks.home.url}
        label={navLinks.home.text}
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        href={navLinks.about.url}
        label={navLinks.about.text}
        leftSection={<IconUser size="1rem" stroke={1.5} />}
      />
      <NavLink
        href={navLinks.portfolio.url}
        label={navLinks.portfolio.text}
        leftSection={<IconLayoutGrid size="1rem" stroke={1.5} />}
      />
      <NavLink
        href={navLinks.contact.url}
        label={navLinks.contact.text}
        leftSection={<IconMail size="1rem" stroke={1.5} />}
      />
    </nav>
  );
}
