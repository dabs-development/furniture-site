import * as React from "react";
import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { tabs } from "../model/main";

import scrollTo from 'gatsby-plugin-smoothscroll';

const HeaderTabs = ({ visibleClass,dispaly}) => {
  const [fixed, setIsfixed] = React.useState("static");

  React.useEffect(() => {
    if (visibleClass === "visible") {
      setIsfixed("fixed");
    } else {
      setIsfixed("static");
    }
  }, [visibleClass]);

  return (
    <Box as="header" display={dispaly}>
      <Tabs
        align="center"
        position={fixed}
        width="100%"
        bg="#fff"
        zIndex={156465}
      >
        <TabList width="100%">
          {tabs.map((tab, index) => (
            <Tab key={`tab-${index}`} fontWeight={500} onClick={() => scrollTo(tab.id)} fontSize={{sm: ".8rem", md: "1.4rem", xl: "1.4rem"}}>
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
