import * as React from "react";
import { Flex,Link } from "@chakra-ui/react";

const Nav = () => 

<Flex bg="#4E4A49" height="75PX" color="#fff" boxShadow="0 0 10px 5px rgba(221, 221, 221, 1)">
        <Flex margin="auto" justifyContent="space-evenly" width="100%">
          <Link fontSize={{sm: "sm", md: "md", xl: "xl"}} _hover={{ textDecoration: "none", opacity: "0.7" }}>КУХНИ</Link>
          <Link fontSize={{sm: "sm", md: "md", xl: "xl"}} _hover={{ textDecoration: "none", opacity: "0.7" }}>ШКАФЫ</Link>
          <Link fontSize={{sm: "sm", md: "md", xl: "xl"}} _hover={{ textDecoration: "none", opacity: "0.7" }}>
            ГАРДЕРОБНЫЕ
          </Link>
          <Link fontSize={{sm: "sm", md: "md", xl: "xl"}} _hover={{ textDecoration: "none", opacity: "0.7" }}>
            ПРИХОЖИЕ
          </Link>
        </Flex>
      </Flex>



export default Nav;
