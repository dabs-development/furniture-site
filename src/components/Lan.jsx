import * as React from "react";
import {
  Box,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Link,
  Image,
  Grid,
  border,
  Button,
} from "@chakra-ui/react";
import kk from "../images/kk.jpg";
import bb from "../images/bb.jpg";

const Lan = ({ openModal }) => (
  <Grid
    bg="#fff"
    gridTemplateColumns={{ xl: "1fr 2fr", lg: "1fr 2fr", md: "1fr", sm: "1fr" }}
    width="100%"
    margin="auto"
  >
    <Flex
      padding={10}
      marginLeft="auto"
      flexDirection="column"
      display={{ xl: "flex", lg: "flex", md: "none", sm: "none" }}
    >
      <Flex paddingBottom={10}>
        <Image borderRadius={7} src={kk} />
      </Flex>
      <Flex display={{ xl: "none", lg: "flex", md: "none", sm: "none" }}>
        <Image borderRadius={7} src={bb} />
      </Flex>
    </Flex>
    <Flex flexDirection="column" padding={{ xl: "20px", lg: "20px", md: "20px", sm: "10px" }}>
      <Text
        color="#79B52D"
        fontSize={{ sm: "1.7rem", md: "2rem", xl: "3rem" }}
      >
        Изготовление корпусной мебели
      </Text>
      <Text
        fontSize={{ sm: "1.5rem", md: "1.5rem", xl: "1.5rem" }}
        fontWeight="bold"
      >
        по вашим эскизам или из нашего каталога
      </Text>
      <Text marginTop={5}>
        Корпусная мебель – это искусно созданные изделия, объединяющие в себе
        функциональность, красоту и практичность. Она представляет собой
        гармоничное сочетание изысканного дизайна и высокого качества
        материалов. Каждая деталь корпусной мебели отражает внимание к дизайну и
        функциональности, обеспечивая комфорт и уют в интерьере. Благодаря
        разнообразию стилей, от классики до современного минимализма, корпусная
        мебель позволяет подобрать оптимальное решение для любого помещения.
        Внимание к деталям, изысканные отделочные материалы и продуманные
        конструкции делают корпусную мебель незаменимым элементом интерьера,
        придающим ему изысканность и функциональность.
      </Text>
      <Button
        width={300}
        colorScheme="teal"
        onClick={openModal}
        marginTop={10}
        bg="#79B52D"
      >
        ОСТАВИТЬ ЗАЯВКУ
      </Button>
    </Flex>
  </Grid>
);

export default Lan;
