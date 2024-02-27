import { sites } from "./sites";
import { Card, CardHeader, CardBody, Image } from "grommet";
import styles from "./portfolio.module.css";
export default function Portfolio() {
  return (
    <div className={styles.container}>
      {sites.map((site) => (
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
        //     <Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }}>
        //       <Card shadow="sm" padding="lg" radius="md" withBorder>
        //         <Card.Section>
        //           <Image
        //             src={site.images[0].src}
        //             height={160}
        //             alt={site.images[0].alt}
        //           />
        //         </Card.Section>

        //         <Group justify="space-between" mt="md" mb="xs">
        //           <Text fw={500}>{site.title}</Text>
        //         </Group>

        //         <Text size="sm" c="dimmed">
        //           {site.shortDescription}
        //         </Text>

        //         <Button color="blue" mt="md" radius="md">
        //           View
        //         </Button>
        //       </Card>
        //     </Grid.Col>
      ))}
    </div>
  );
}
