import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Tabs,
  TabList,
  Tab,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Link } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Contacts = () => {
  return (
    <Flex
      width="100%"
      padding={5}
      wrap={wrap}
      backgroundImage="url('/src/images/kux.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex maxWidth="1000px" margin="auto" flexDirection="column">
        <Text fontSize={"4xl"} marginLeft={7}>
          Связаться с нами
        </Text>
        <Wrap>
          <WrapItem flexDirection={"column"} marginLeft={7}>
            <Text fontWeight="bold" fontSize={"xl"}>
              В сети
            </Text>
            <Box height="1px" bg={"black"} width={"100%"}></Box>
            <Text fontSize={"2xl"}>555-555-5555</Text>
            <Text fontSize={"2xl"}>info@mailservice.com</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"} marginLeft={7}>
            <Text fontWeight="bold" fontSize={"xl"}>
              Посетите нас
            </Text>
            <Box height={"1px"} bg={"black"} width={"100%"}></Box>
            <Text>Название улицы</Text>
            <Text>Почтовый индекс, Страна</Text>
          </WrapItem>
          <WrapItem flexDirection={"column"} marginLeft={7}>
            <Text fontWeight="bold" fontSize={"xl"}>
              Рабочие часы
            </Text>
            <Box height={"1px"} bg={"black"} width={"100%"}></Box>
            <Text>Пн–Пт</Text>
            <Text>9:00–17:00</Text>
            <Text>Сб–Вс</Text>
            <Text>Выходной</Text>
          </WrapItem>
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default Contacts;
