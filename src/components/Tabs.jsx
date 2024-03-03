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

const Tabss = ({ isvisible }) => {

  const [fixed, setIsfixed] = React.useState('static');

  React.useEffect(() => {
    if (isvisible === "visible") {
      setIsfixed("fixed")
    } else {
      setIsfixed("static")
    }
  }, [isvisible]);



  return (
    <Box as="header">
      <Tabs align="center" position={fixed} width="100%" bg="#fff" zIndex={156465}>
        <TabList width="100%">
          {tabs.map((tab, index) => (
            <Tab key={`tab-${index}`} fontWeight={500}>
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Tabss;
