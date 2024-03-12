import * as React from "react";
import {
  Box,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Link,
  Image,
  Grid,
  border,
  Button,
} from "@chakra-ui/react";

import prih from "../images/prih(1).jpg";

const ImageModal = ({ oppen, closeImagePopup, photoUrl }) => {
  return (
    <Flex
    display={{ xl: "flex", lg: "flex", md: "flex", sm: "none" }}
      position="fixed"
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.5)"
      zIndex={5645646}
      justifyContent="center"
      alignItems="center"
      visibility={oppen}
      onClick={closeImagePopup}
    >
      <Flex
        flexDirection="column"
        marginTop="-100px"
        zIndex={11}
        bg="rgba(0, 0, 0, 0.0)"
        padding={2}
        position="relative"
        maxWidth="75vw"
        maxHeight="75vh"
      >
        <Button
          display="none"
          color="#fff"
          bg="rgba(0, 0, 0, 0.0)"
          position="absolute"
          width={10}
          fontSize={{ xl: "3rem", lg: "3rem", md: "3rem", sm: "1.5rem" }}
          _hover={{ bg: "rgba(0, 0, 0, 0.0)" }}
          top={{ xl: "-40px", lg: "-40px", md: "-40px", sm: "-35px" }}
          right={{ xl: "-40px", lg: "-40px", md: "-40px", sm: "-15px" }}
          onClick={closeImagePopup}
        >
          &#x2716;
        </Button>
        <Image maxWidth="85vw" maxHeight="85vh" src={photoUrl} />
      </Flex>
    </Flex>
  );
};

export default ImageModal;
