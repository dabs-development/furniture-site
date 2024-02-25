import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Text, Link, Box, Flex, Spacer } from "@chakra-ui/react";

const Footer = () => (
  <Box
    as="footer"
    bg="linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)"
    height="140px"
  >
    <Flex
      margin="auto"
      justifyContent="space-evenly"
      width="100%"
      paddingTop={21}
    >
      <Box marginLeft="2%">
        <StaticImage
          src="../images/fur.avif"
          alt="img"
          width={100}
          quality={95}
          style={{ backgroundSize: "cover" }}
        />
      </Box>
      <Spacer />
      <Flex gap={5} paddingTop={5}>
        <Link>
          <StaticImage
            src="../images/what.png"
            alt="img"
            width={65}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link>
          <StaticImage
            src="../images/vk.png"
            alt="img"
            width={43}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link marginLeft={3}>
          <StaticImage
            src="../images/inst.png"
            alt="img"
            width={43}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex flexDirection="column">
        <Text>+7 (999) 999-38-96</Text>
        <Text>mebel.top.qa@gmail.com</Text>
        <Text>Москва,пр-лавешкина. 45/4</Text>
      </Flex>
      <Spacer />
      <Flex flexDirection="column">
        <Text>ИП Иван Иванович Иванов</Text>
        <Text>ИНН: 580315332567</Text>
        <Text>ОГРНИП: 35345675044541</Text>
      </Flex>
      <Spacer />
    </Flex>
  </Box>
);

export default Footer;
