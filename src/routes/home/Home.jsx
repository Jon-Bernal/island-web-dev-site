import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <p>Hello! Welcome to Whidbey Island Web Dev!</p>
      <p>
        This site is still under construction, so please bear with me on things
        not being as polished as they could be. If you'd like to see a more
        polished version of what I can make, feel free to check out my{" "}
        <a href="https://jon-bernal.netlify.app/" className={styles.textLink}>
          portfolio website
        </a>
      </p>
    </div>
  );
}
