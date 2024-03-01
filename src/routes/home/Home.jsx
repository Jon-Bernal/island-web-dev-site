import styles from "./home.module.css";

import { Image, Carousel } from "grommet";

import pluaris from "../../assets/pluaris.png";
import portfolio1 from "../../assets/portfolio-1.png";
import guild from "../../assets/guild-1.png";
import headshot from "../../assets/headshot.png";

export default function Home() {
  return (
    <div>
      <section className={styles.aboveTheFold}>
        <div className={styles.aboveTheFold_text}>
          <p>
            Hello! I'm Jon Bernal and welcome to Whidbey Island Web Development!
            I'm a freelance web developer based right here in Clinton, WA. I
            help local businesses and not for profits create, change or fix up
            their websites and web applications
          </p>
        </div>
        <img
          src={headshot}
          alt={"Pencil drawing of Jon Bernal"}
          className={styles.aboveTheFold_image}
        />
      </section>

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
            <Image src={guild} width={"100%"} />
          </Carousel>
        </div>
      </p>
    </div>
  );
}
