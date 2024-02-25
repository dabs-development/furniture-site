import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Tabs, TabList, Tab, ButtonGroup, Button } from "@chakra-ui/react";
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

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)"
    >
      <Wrap
        margin="auto"
        justifyContent="space-evenly"
        width="100%"
        padding={21}
        gap={10}
      >
        <WrapItem marginLeft="2%">
          <StaticImage
            src="../images/fur.avif"
            width={100}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </WrapItem>
        <Spacer />
        <WrapItem gap={5} paddingTop={5}>
          <Link>
            <StaticImage
              src="../images/what.png"
              width={65}
              quality={95}
              style={{ backgroundSize: "cover" }}
            />
          </Link>
          <Link>
            <StaticImage
              src="../images/vk.png"
              width={43}
              quality={95}
              style={{ backgroundSize: "cover" }}
            />
          </Link>
          <Link marginLeft={3}>
            <StaticImage
              src="../images/inst.png"
              width={43}
              quality={95}
              style={{ backgroundSize: "cover" }}
            />
          </Link>
        </WrapItem>
        <Spacer />
        <Flex flexDirection="column" paddingTop={5}>
          <Text fontSize={["sm", "md", "lg", "xl"]}>+7 (999) 999-38-96</Text>
          <Text fontSize={["sm", "md", "lg", "xl"]}>mebel.top.qa@gmail.com</Text>
          <Text fontSize={["sm", "md", "lg", "xl"]}>Москва,пр-лавешкина. 45/4</Text>
        </Flex>
        <Spacer />
        <Flex flexDirection="column" paddingTop={5}>
          <Text fontSize={["sm", "md", "lg", "xl"]}>ИП Иван Иванович Иванов</Text>
          <Text fontSize={["sm", "md", "lg", "xl"]}>ИНН: 580315332567</Text>
          <Text fontSize={["sm", "md", "lg", "xl"]}>ОГРНИП: 35345675044541</Text>
        </Flex>
        <Spacer />
      </Wrap>
    </Box>
  );
};

export default Footer;
