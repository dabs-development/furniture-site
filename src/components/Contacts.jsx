import * as React from "react";
import { Box, Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Contacts = () => (
  <Flex width={{sm: "95%", md: "80%", xl: "70%"}} margin='auto' padding={5} wrap={wrap} bg='#f1f3f9' boxShadow="0 1px 4px rgba(0, 0, 0, .3),
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
          <Text fontSize="2xl">555-555-5555</Text>
          <Text fontSize="2xl">info@mailservice.com</Text>
        </WrapItem>
        <WrapItem flexDirection="column" marginLeft={1}>
          <Text fontWeight="bold" fontSize="xl">
            Посетите нас
          </Text>
          <Box height="1px" bg="black" width="100%" />
          <Text>Название улицы</Text>
          <Text>Почтовый индекс, Страна</Text>
        </WrapItem>
        <WrapItem flexDirection="column" marginLeft={1}>
          <Text fontWeight="bold" fontSize="xl">
            Рабочие часы
          </Text>
          <Box height="1px" bg="black" width="100%" />
          <Text>Пн–Пт</Text>
          <Text>9:00–17:00</Text>
          <Text>Сб–Вс</Text>
          <Text>Выходной</Text>
        </WrapItem>
      </Wrap>
    </Flex>
  </Flex>
);

export default Contacts;
