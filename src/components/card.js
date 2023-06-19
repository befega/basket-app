import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const CardComponent = ({ name, image, price, description, onAdd }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={name} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="pink" variant="light">
          {price} TL
        </Badge>
      </Group>

      <Text size="sm" color="black">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAdd}
      >
        Ekle
      </Button>
    </Card>
  );
};

export default CardComponent;
