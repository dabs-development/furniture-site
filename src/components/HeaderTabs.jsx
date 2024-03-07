import * as React from "react";
import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import scrollTo from "gatsby-plugin-smoothscroll";

import { TABS } from "../model/main";

const HeaderTabs = ({ visibleClass, display }) => {
  const [fixed, setIsfixed] = React.useState("static");

  React.useEffect(() => {
    if (visibleClass === "visible") {
      setIsfixed("fixed");
    } else {
      setIsfixed("static");
    }
  }, [visibleClass]);

  return (
    <Box as="header" display={display}>
      <Tabs
        align="center"
        position={fixed}
        width="100%"
        bg="#fff"
        zIndex={156465}
      >
        <TabList width="100%">
          {TABS.map((tab, index) => (
            <Tab
              key={`tab-${index}`}
              fontWeight={500}
              onClick={() => scrollTo(tab.id)}
              fontSize="1rem"
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
