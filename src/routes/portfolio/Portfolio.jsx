import { Card, Image, Group, Text, Button, Grid } from "@mantine/core";
import { sites } from "./sites";

export default function Portfolio() {
  return (
    <Grid>
      {sites.map((site) => (
        <Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={site.images[0].src}
                height={160}
                alt={site.images[0].alt}
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{site.title}</Text>
            </Group>

            <Text size="sm" c="dimmed">
              {site.description}
            </Text>

            <Button color="blue" mt="md" radius="md">
              View
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
