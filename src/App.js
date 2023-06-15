import { useState } from "react";
import "./App.css";
import { Container, SimpleGrid, List, ThemeIcon, Stack } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Card from "./components/card";

const storeItems = [
  {
    name: "Klavye",
    price: 100,
    quantity: 5,
    image:
      "https://unsplash.com/photos/2xU7rYxsTiM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8fHwxNjg2ODE4MDExfDA&force=true&w=640",
    description:
      "Bu klavye 102 tuşa sahiptir. Arkadan aydınlatmalı RGB renklere sahiptir ve her bir tuş kontrol edilebilir.",
  },
  {
    name: "Mouse",
    price: 200,
    quantity: 7,
    image:
      "https://unsplash.com/photos/T_2UFB_xwzw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBtb3VzZXxlbnwwfHx8fDE2ODY4MzkyMzR8MA&force=true&w=640",
    description:
      "Bu mouse 6000 DPI özellikli ve ele tam oturan kaliteli bir oyuncu ekipmanıdır.",
  },
  {
    name: "Hoparlör",
    price: 300,
    quantity: 10,
    image:
      "https://unsplash.com/photos/qPojqUji_y4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzcGVha2VyfGVufDB8fHx8MTY4Njg1NzYxMHww&force=true&w=640",
    description:
      "Bu hoparlör 2+1 15W gücünde ve 3.5mm ses çıkışına sahip iyi bir hoparlördür.",
  },
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  return (
    <Container>
      <Stack
        align="flex-start"
        justify="flex-start"
        h={300}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <SimpleGrid cols={3}>
          {storeItems.map(({ name, image, price, quantity, description }) => {
            return (
              <Card
                key={name}
                name={name}
                image={image}
                price={price}
                quantity={quantity}
                description={description}
                onAdd={() => setBasketItems([...basketItems, { name }])}
              />
            );
          })}
        </SimpleGrid>
        <SimpleGrid>
          <List
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCircleCheck size="1rem" />
              </ThemeIcon>
            }
          >
            {basketItems.map(({ name }, index) => (
              <List.Item key={index}>{name}</List.Item>
            ))}
          </List>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default App;
