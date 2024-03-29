import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Text, Box, Flex, Spacer,Wrap,WrapItem,Image } from "@chakra-ui/react";
import { Link } from "gatsby"

import Logo from "../images/logo.png";
import what from "../images/what.png";
import vk from "../images/vk.png";
import inst from "../images/inst.png";
import teleg from "../images/telegram.png";


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
        <Link to="https://wa.me/89272889933">
          <Image
            src={what}
            alt="img"
            width={65}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link to="https://t.me/YuraB777">
          <Image
            src={teleg}
            alt="img"
            width={43}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <Link marginLeft={3} to="#">
          <Image
          display="none"
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
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>+7 (927) 288-99-33</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>info@tqmebel.ru</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}} display="none">
          Москва,пр-лавешкина. 45/4
        </Text>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" paddingTop={5}>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ИП Баранов Юрий Олегович</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ИНН: 580307686539</Text>
        <Text fontSize={{sm: "sm", md: "md", xl: "xl"}}>ОГРНИП: 324580000010414</Text>
      </Flex>
      <Spacer />
    </Wrap>
  </Box>
);

export default Footer;
