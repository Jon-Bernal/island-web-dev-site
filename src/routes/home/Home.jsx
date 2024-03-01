import styles from "./home.module.css";

import { Image, Carousel } from "grommet";

import pluaris from "../../assets/pluaris.png";
import portfolio1 from "../../assets/portfolio-1.png";
import Guild from "../../assets/guild-1.png";

export default function Home() {
  return (
    <div>
      <p>Hello!</p>
      <p>Welcome to Whidbey Island Web Dev!</p>
      <p>
        This site is still under construction, so please bear with me on things
        not being as polished as they could be. If you'd like to see a more
        polished version of what I can make, feel free to check out my{" "}
        <a href="https://jon-bernal.netlify.app/" className={styles.textLink}>
          portfolio website
        </a>
        <div style={{ width: "100%", margin: "0 auto" }}>
          <Carousel play={6000}>
            <Image src={pluaris} width={"100%"} />
            <Image src={portfolio1} width={"100%"} />
            <Image src={Guild} width={"100%"} />
          </Carousel>
        </div>
      </p>
    </div>
  );
}
