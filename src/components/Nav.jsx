import * as React from "react";
import { Flex} from "@chakra-ui/react";
import { Link } from "gatsby"

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
          to="/kitchen/"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          КУХНИ
        </Link>
        <Link
        to="/cabinets/"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          ШКАФЫ
        </Link>
        <Link
        to="/wardrobes/"
          fontSize={{ sm: "sm", md: "md", xl: "xl" }}
          _hover={{ textDecoration: "none", opacity: "0.7" }}
        >
          ГАРДЕРОБНЫЕ
        </Link>
        <Link
         to="/hallways/"
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
