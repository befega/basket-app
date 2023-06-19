import {
  Badge,
  Button,
  Container,
  Drawer,
  Group,
  Indicator,
  Input,
  List,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCircleCheck,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";
import Card from "./components/card";

const storeItems = [
  {
    id: 100,
    name: "Klavye",
    price: 100,
    image:
      "https://unsplash.com/photos/2xU7rYxsTiM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8fHwxNjg2ODE4MDExfDA&force=true&w=640",
    description:
      "Bu klavye 102 tuşa sahiptir. Arkadan aydınlatmalı RGB renklere sahiptir ve her bir tuş kontrol edilebilir.",
  },
  {
    id: 101,
    name: "Mouse",
    price: 200,
    image:
      "https://unsplash.com/photos/T_2UFB_xwzw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBtb3VzZXxlbnwwfHx8fDE2ODY4MzkyMzR8MA&force=true&w=640",
    description:
      "Bu mouse 6000 DPI özellikli ve ele tam oturan kaliteli bir oyuncu ekipmanıdır.",
  },
  {
    id: 102,
    name: "Hoparlör",
    price: 300,
    image:
      "https://unsplash.com/photos/qPojqUji_y4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzcGVha2VyfGVufDB8fHx8MTY4Njg1NzYxMHww&force=true&w=640",
    description:
      "Bu hoparlör 2+1 15W gücünde ve 3.5mm ses çıkışına sahip iyi bir hoparlördür.",
  },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchText, setSearchText] = useState("");
  let filteredBasketItems = storeItems.filter(
    (storeItems) =>
      storeItems.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
  );
  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end" className="SearchGroup">
        <Input
          value={searchText}
          icon={<IconSearch />}
          placeholder="Arama yap"
          radius="md"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button color="red" onClick={() => setSearchText("")}>
          Temizle
        </Button>
        <Indicator inline size={22} color="red" label={basketItems.length}>
          <Button onClick={() => setOpened(true)}>
            <IconShoppingCart size="1.4rem" />
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredBasketItems.map(({ id, name, image, price, description }) => {
          return (
            <Card
              key={name}
              name={name}
              image={image}
              price={price}
              description={description}
              onAdd={() => addToBasket({ id, name })}
            />
          );
        })}
      </SimpleGrid>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sepet"
      >
        <List
          className="List"
          spacing="xs"
          size="xs"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ id, name, count }, index) => (
            <List.Item key={index}>
              {name} <Badge>{count}</Badge>
            </List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
