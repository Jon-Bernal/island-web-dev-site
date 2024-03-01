import { useEffect, useState } from "react";
import { sites } from "./sites";
import { Card, CardHeader, CardBody, Image, Box, Carousel } from "grommet";
import styles from "./portfolio.module.css";
import CloseBtn from "../../Components/closeBtn/CloseBtn";

export default function Portfolio() {
  const [showSite, setShowSite] = useState(-1);

  return (
    <div className={styles.container}>
      {showSite !== -1 && (
        <div className={styles.fullSiteContainer}>
          <h3>{sites[showSite].title}</h3>
          <CloseBtn
            close={() => setShowSite(-1)}
            extraStyles={styles.closeBtn}
          />
          <div className={styles.carouselContainer}>
            <Carousel fill>
              {sites[showSite].images.map((siteImg) => (
                <Image
                  fit="contain"
                  src={siteImg.src}
                  alt={siteImg.alt}
                  width={"100%"}
                />
              ))}
            </Carousel>
          </div>
          <p>{sites[showSite].description}</p>
        </div>
      )}
      {showSite === -1 &&
        sites.map((site, i) => (
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
    </div>
  );
}
