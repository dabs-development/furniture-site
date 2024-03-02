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

  const [isvisible, setIsvisible] = React.useState('');

  const [page, setPage] = useState(0);

  window.addEventListener('scroll', () => {

    const windowRelativeBottom = document.documentElement.getBoundingClientRect().top;
    if(windowRelativeBottom < -440){
      setIsvisible("visible") 
    } else{
      setIsvisible("hidden") 
    }
  });




  const hanldeSubmit = (values) => {
    if (page === 1) {
      // do smth
      console.log(values);
      onClose();

      return;
    }

    setPage((currentPage) => currentPage + 1);
  };

  const initialValues = {
    name: "",
    phone: "",
    size: "7 см",
  };

  return (
    <ChakraProvider theme={theme}>
      <Formik initialValues={initialValues} onSubmit={hanldeSubmit}>
        {(props) => (
          <>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <OrderModal
                page={page}
                values={props.values}
                onSubmit={props.handleSubmit}
                initialRef={initialRef}
                closeModal={onClose}
              />
            </Modal>
            <Header openModal={onOpen} />
            <Nav display="flex" position="static" width="100%" bottom="0px" isvisible='isvisible'/>
            <Reviews openModal={onOpen} />
            <Lan openModal={onOpen} />
            <Examples />
            <Advantages />
            <Stock openModal={onOpen} />
            <Individual />
            <Stages />
            <Buyer />
            <Contacts />
            <Footer />
            <Nav display="flex" position="fixed" width="100%" bottom="0px" isvisible={isvisible}/>
          </>
        )}
      </Formik>
    </ChakraProvider>
  );
};

export default App;
