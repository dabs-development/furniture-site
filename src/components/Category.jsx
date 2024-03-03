import * as React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";

const Category = ({ location, openModal }) => {
  return (
    <Flex
      bg="fff"
      color="black"
      flexDirection="column"
      paddingLeft={5}
      paddingRight={5}
      paddingBottom={7}
      paddingTop={4}
      width="80%"
      margin="auto"
    >
      <Flex paddingBottom={5}>
        <Link href="/">
          <Text paddingRight={2} color="#79B52D">
            Главная
          </Text>
        </Link>
        <Text
          paddingLeft={2}
          color="black"
          opacity="0.5"
          borderLeft="2px solid #79B52D"
        >
          Кухни
        </Text>
      </Flex>
      <Flex flexDirection="column" padding={5} borderLeft="3px solid #79B52D">
        <Text fontSize="3rem">Кухни</Text>
        <Text fontSize="2rem" color="#79B52D">
          Фотогалерея готовых проектов
        </Text>
      </Flex>
      <Text paddingBottom={5} paddingTop={5}>
        Мебель на кухне – это не только функциональные предметы, но и элементы,
        придающие уют и стиль этому пространству. Она создает атмосферу комфорта
        и гармонии, сочетая в себе изящество дизайна и практичность
        использования. Каждая деталь мебели – будь то стильный стол, удобные
        стулья или элегантные шкафы – добавляет неповторимый шарм кухонному
        интерьеру, делая его привлекательным и функциональным одновременно.
        Мебель на кухне – это место, где красота встречается с удобством,
        создавая идеальную среду для приготовления пищи и приятного
        времяпрепровождения.
      </Text>
    </Flex>
  );
};

export default Category;
