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
import Reviews from "./Reviews";
import OrderModal from "./OrderModal";
import Nav from "./Nav";
import Individual from "./Individual";
import Examples from "./Examples";
import Stages from "./Stages";
import Lan from "./Lan";
import Advantages from "./Advantages";
import Stock from "./Stock";
import Buyer from "./Buyer";


const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
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
      <Nav />
      <Reviews  openModal={onOpen}/>
      <Lan openModal={onOpen} />
      <Examples />
      <Advantages />
      <Stock openModal={onOpen} />
      <Individual />
      <Stages />
      <Buyer/>
      <Contacts />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
