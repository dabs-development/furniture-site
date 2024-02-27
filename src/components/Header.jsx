import * as React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { tabs } from "../model/main";
import Logo from "../images/logo.png";

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

      <Grid
        bg="#fff"
        boxShadow="0 0 10px 5px rgba(221, 221, 221, 1)"
        templateAreas={{
          sm: `'logo'
                'btns'
                'contacts'`,
          md: `'logo btns contacts'`,
          xl: `'logo btns contacts'`,
        }}
        gridTemplateRows={{
          sm: "1fr",
          md: "1fr",
          xl: "1fr",
        }}
        gridTemplateColumns={{
          sm: "1fr",
          md: "1fr 2fr 1fr",
          xl: "1fr 2fr 1fr",
        }}
        gap={{
          sm: 2,
          md: 0,
          xl: 0,
        }}
      >
        <GridItem
          area="logo"
          mt={{ sm: "1rem", md: 0 }}
          justifySelf={{ sm: "center", md: "start" }}
        >
          <Image
            boxSize="170px"
            src={Logo}
            borderRadius={{ sm: "full", md: "unset" }}
            alt="Logo"
            padding={0}
          />
        </GridItem>

        <GridItem
          area="btns"
          gap="2"
          display="flex"
          alignSelf="center"
          justifyContent="center"
        >
          <Button bg="#79B52D" colorScheme="teal" onClick={openModal}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <Button bg="#79B52D" colorScheme="teal"> WHATSAPP</Button>
        </GridItem>

        <GridItem
          area="contacts"
          textAlign={{ sm: "center", xl: "end" }}
          alignSelf="center"
          padding={{ md: "1rem",sm: '1rem' }}
        >
          Собственное производство
          <br />
          Телефон: +7 (999) 999-38-96
          <br />
          Почта: mebel.top.qa@gmail.com
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
