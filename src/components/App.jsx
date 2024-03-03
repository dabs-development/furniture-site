/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from "react";
import { Formik } from "formik";
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
import Scrollbutton from "./Scrollbutton";
import Tabs from "./Tabs";
import Category from "./Category";

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



  const [isvisible, setIsvisible] = React.useState('hidden');

  return (
    <>
      <Tabs isvisible={isvisible} />
      <Reviews openModal={onOpen} />
      <Lan openModal={onOpen} />
      <Examples />
      <Advantages />
      <Stock openModal={onOpen} />
      <Individual />
      <Stages />
      <Buyer />
      <Contacts />
    </>
  );
};

export default App;
