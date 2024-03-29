import * as React from "react";
import { Divider, Text, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";

import InlineForm from "./form/InlineForm";

import AppContext from "../context";


const Category = ({ name, mainText, block, children }) => {

  const context = React.useContext(AppContext);
  
  return (
    <Flex
    position="relative"
      bg="fff"
      color="black"
      flexDirection="column"
      paddingLeft={5}
      paddingRight={5}
      paddingBottom={7}
      paddingTop={4}
      width={{ sm: "95%", md: "80%", xl: "80%" }}
      margin="auto"
    >
      <Flex paddingBottom={5}>
        <Link to="/">
          <Text paddingRight={2} color="#79B52D">
            Главная
          </Text>
        </Link>
        <Text
          paddingLeft={2}
          color="black"
          opacity="0.5"
          borderLeft="2px solid #79B52D"
        >
          {name}
        </Text>
      </Flex>
      <Flex flexDirection="column" padding={5} borderLeft="3px solid #79B52D">
        <Text
          fontSize={{ sm: "2rem", md: "2rem", xl: "3rem" }}
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text
          fontSize={{ sm: "1.4rem", md: "1.4rem", xl: "3rem" }}
          color="#79B52D"
          display={block}
        >
          Фото готовых проектов
        </Text>
      </Flex>
      <Text paddingTop={5} paddingBottom={5}>{mainText}</Text>
      {children}

      <Divider m="2rem 0" />
      <InlineForm />
    </Flex>
  );
};

export default Category;
