import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  ButtonGroup,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { tabs } from "../model/main";

const Header = ({ openModal }) => {
  return (
    <Box as="header">
      <Tabs align="center">
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={`tab-${index}`} fontWeight={500}>
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Flex bg="linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)">
        <Box paddingTop="15px" paddingBottom="15px" marginLeft="2%">
          <StaticImage
            src="../images/fur.avif"
            alt="img"
            width={100}
            quality={95}
            style={{ backgroundSize: "cover" }}
          />
        </Box>
        <Spacer />

        <ButtonGroup
          gap="2"
          paddingTop="65px"
          paddingLeft={["7px", "20px", "20px", "18%"]}
        >
          <Button colorScheme="teal" onClick={openModal}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <Button colorScheme="teal">НАПИСАТЬ В WHATSAPP</Button>
        </ButtonGroup>

        <Spacer />

        <Box paddingTop="35px" fontSize={["sm", "sm", "sm", "lg"]}>
          Собственное производство
          <br />
          Телефон: +7 (999) 999-38-96
          <br />
          Почта: mebel.top.qa@gmail.com
        </Box>

        <Spacer />
      </Flex>
    </Box>
  );
};

export default Header;
