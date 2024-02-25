import React, { useRef } from "react";
import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Main from "./Main";
import OrderModal from "./OrderModal";

const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    xl: "1200px",
  },
  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
        fontFamily: "Inter Variable",
      },
    },
  },
});

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ id: "order-modal" });
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <ChakraProvider theme={theme}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <OrderModal initialRef={initialRef} />
      </Modal>
      <Header openModal={onOpen} />
      <Main />
      <Contacts />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
