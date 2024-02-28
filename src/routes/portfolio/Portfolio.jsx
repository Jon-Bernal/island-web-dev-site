import { useEffect, useState } from "react";
import { sites } from "./sites";
import { Card, CardHeader, CardBody, Image } from "grommet";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [showSite, setShowSite] = useState(-1);

  useEffect(() => {
    console.log("showSite :>> ", showSite);
  }, [showSite]);

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
