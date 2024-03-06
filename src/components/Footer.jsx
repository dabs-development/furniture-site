import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Text, Box, Flex, Spacer,Wrap,WrapItem,Image } from "@chakra-ui/react";
import { Link } from "gatsby"

import Logo from "../images/logo.png";
import what from "../images/what.png";
import vk from "../images/vk.png";
import inst from "../images/inst.png";


const Footer = () => (
  <Box
  color="black"
    as="footer"
    bg="rgb(233, 219, 217)"
    marginBottom={{ xl: '80px', lg: '80px', md: '80px', sm: "80px" }}
  >
    <Wrap
      margin="auto"
      justifyContent="space-evenly"
      width="100%"
      padding={21}
    >
      <Box marginLeft="2%">
        <Link to="/">
        <Image
          src={Logo}
          alt="img"
          width={100}
          quality={95}
          style={{ backgroundSize: "cover" }}
        />
        </Link>
      </Box>
      <Spacer />
      <Flex gap={5} paddingTop={5}>
        <Link>
          <Image
            src={what}
            alt="img"
            width={65}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link>
          <Image
            src={vk}
            alt="img"
            width={43}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link marginLeft={3}>
          <Image
            src={inst}
            alt="img"
            width={43}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" paddingTop={5}>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>+7 (999) 999-38-96</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>mebel.top.qa@gmail.com</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>
          Москва,пр-лавешкина. 45/4
        </Text>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" paddingTop={5}>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ИП Иван Иванович Иванов</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ИНН: 580315332567</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ОГРНИП: 35345675044541</Text>
      </Flex>
      <Spacer />
    </Wrap>
  </Box>
);

export default Footer;
