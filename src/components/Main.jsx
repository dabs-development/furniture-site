import * as React from "react";
import { Flex, Link } from "@chakra-ui/react";

const Main = () => (
  <Flex bg="#4E4A49" height="75PX" color="#fff">
    <Flex margin="auto" justifyContent="space-evenly" width="100%">
      <Link _hover={{ textDecoration: "none", opacity: "0.7" }}>КУХНИ</Link>
      <Link _hover={{ textDecoration: "none", opacity: "0.7" }}>ШКАФЫ</Link>
      <Link _hover={{ textDecoration: "none", opacity: "0.7" }}>
        ГАРДЕРОБНЫЕ
      </Link>
      <Link _hover={{ textDecoration: "none", opacity: "0.7" }}>ПРИХОЖИЕ</Link>
    </Flex>
  </Flex>
);

export default Main;
