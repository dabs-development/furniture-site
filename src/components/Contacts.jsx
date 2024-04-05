import * as React from "react";
import { Box, Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Contacts = () => (
  <Flex width={{sm: "95%", md: "50%", xl: "40%"}} margin='auto' padding={5} wrap={wrap} bg='#f1f3f9' boxShadow="0 1px 4px rgba(0, 0, 0, .3),
  -23px 0 20px -23px rgba(0, 0, 0, .8),
  23px 0 20px -23px rgba(0, 0, 0, .8),
  0 0 40px rgba(0, 0, 0, .1) inset;" marginBottom={5} id="contacts">
    <Flex  margin="auto" flexDirection="column">
      <Text fontSize={{sm: "1.8rem", md: "1.8rem", xl: "3rem"}} marginLeft={0} color="#79B52D">
        Связаться с нами
      </Text>
      <Wrap>
        <WrapItem flexDirection="column" marginLeft={1}>
          <Text fontWeight="bold" fontSize="xl">
            В сети
          </Text>
          <Box height="1px" bg="black" width="100%" />
          <Text fontSize="2xl">+7 (927) 288-99-33</Text>
          <Text fontSize="2xl">info@tqmebel.ru</Text>
        </WrapItem>
        <WrapItem flexDirection="column" marginLeft={1} display="none">
          <Text fontWeight="bold" fontSize="xl">
            Посетите нас
          </Text>
          <Box height="1px" bg="black" width="100%" />
          <Text>Название улицы</Text>
          <Text>Почтовый индекс, Страна</Text>
        </WrapItem>
        <WrapItem flexDirection="column" marginLeft={1}>
          <Text fontWeight="bold" fontSize="xl">
            Рабочие часы по МСК
          </Text>
          <Box height="1px" bg="black" width="100%" />
          <Text>Пн–Пт</Text>
          <Text>8:00–22:00</Text>
          <Text>Сб–Вс</Text>
          <Text>10:00–21:00</Text>
        </WrapItem>
      </Wrap>
    </Flex>
  </Flex>
);

export default Contacts;
