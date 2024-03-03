import * as React from "react";
import { Flex, Link } from "@chakra-ui/react";

const Nav = ({ display, position, width, bottom, isvisible }) => {
  return (
    <Flex
      bg="#4E4A49"
      height="75PX"
      color="#fff"
      boxShadow="0 0 10px 5px rgba(221, 221, 221, 1)"
      display={display}
      position={position}
      width={width}
      bottom={bottom}
      visibility={isvisible}
    >
      <Flex margin="auto" justifyContent="space-evenly" width={width}>
        <Link
          href="/kitchen"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          КУХНИ
        </Link>
        <Link
        href="/cabinets"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          ШКАФЫ
        </Link>
        <Link
        href="/wardrobes"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          ГАРДЕРОБНЫЕ
        </Link>
        <Link
         href="/hallways"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          ПРИХОЖИЕ
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
