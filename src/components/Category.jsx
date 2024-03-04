import * as React from "react";
import { Text, Flex} from "@chakra-ui/react";
import { Link } from "gatsby"

const Category = ({  openModal,name,mainText }) => {


  return (
    <Flex
      bg="fff"
      color="black"
      flexDirection="column"
      paddingLeft={5}
      paddingRight={5}
      paddingBottom={7}
      paddingTop={4}
      width="80%"
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
        <Text fontSize={{sm: "2rem", md: "2rem", xl: "3rem"}} fontWeight="bold">{name}</Text>
        <Text fontSize="2rem" color="#79B52D">
          Фотогалерея готовых проектов
        </Text>
      </Flex>
      <Text paddingBottom={5} paddingTop={5}>
      {mainText}
      </Text>
    </Flex>
  );
};

export default Category;
