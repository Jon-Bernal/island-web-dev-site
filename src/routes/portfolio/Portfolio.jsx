import { Card, Image, Group, Text, Button } from "@mantine/core";

const sites = [
  {
    image: {
      src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
      alt: "Norway",
    },
    title: "Norway Fjord Adventures",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  },
  {
    image: {
      src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
      alt: "Norway",
    },
    title: "Norway Fjord Adventures",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  },
];

export default function Portfolio() {
  return (
    <div>
      {sites.map((site) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={site.image.src} height={160} alt={site.image.alt} />
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
      ))}
    </div>
  );
}
