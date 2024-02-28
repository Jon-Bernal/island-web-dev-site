import { useEffect, useState } from "react";
import { sites } from "./sites";
import { Card, CardHeader, CardBody, Image } from "grommet";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [showSite, setShowSite] = useState(-1);

  return (
    <div className={styles.container}>
      {sites.map((site, i) => (
        <button
          className={styles.card_button}
          onClick={() => {
            if (showSite === i) {
              setShowSite(-1);
            } else {
              setShowSite(i);
            }
          }}
        >
          <Card
            height="medium"
            width="medium"
            background="dark-2"
            className={styles.card}
          >
            <CardHeader pad="none">
              <Image src={site.images[0].src} fit="cover" />
            </CardHeader>
            <CardBody pad="small">
              <h4 className={styles.title}>{site.title}</h4>
              <p className={styles.shortDesc}>{site.shortDescription}</p>
            </CardBody>
          </Card>
        </button>
      ))}
      {showSite !== -1 && (
        <div className={styles.fullSiteContainer}>
          <button
            className={styles.siteCloseBtn}
            onClick={() => {
              setShowSite(-1);
            }}
          >
            <svg
              // stroke="blue"
              fill="#ff7b1c"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              fill-rule="evenodd"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"></path>
            </svg>
          </button>
          <image
            src={sites[showSite].images[0].src}
            alt={sites[showSite].images[0].alt}
          />
          <h3>{sites[showSite].title}</h3>

          <p>{sites[showSite].description}</p>
        </div>
      )}
    </div>
  );
}
