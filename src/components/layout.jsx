import React, { useRef, useMemo, useState } from "react";
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
import OrderModal from "./OrderModal";
import Scrollbutton from "./Scrollbutton";
import Nav from "./Nav";
import AppContext from "../context/index";

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

const initialValues = {
  name: "",
  phone: "",
  size: "7 см",
};

export default function Layout({ children}) {
  const { isOpen, onOpen, onClose } = useDisclosure({ id: "order-modal" });
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [visibleClass, setVisibleClass] = React.useState("hidden");

  const [page, setPage] = useState(0);

  const hanldeSubmit = (values) => {
    if (page === 1) {
      // do smth
      console.log(values);
      onClose();

      return;
    }

    setPage((currentPage) => currentPage + 1);
  };

  const scrollButton = () => {
    let scroll;
    scroll = document.body.scrollTop || window.scrollY;

    const t = setInterval(() => {
      if (scroll > 0) window.scroll(0, (scroll -= 20));
      else clearInterval(t);
    }, 1);
  };

  const scroll = () => {
    const windowRelativeBottom =
      document.documentElement.getBoundingClientRect().top;
    if (windowRelativeBottom < -440) {
      setVisibleClass("visible");
    } else {
      setVisibleClass("hidden");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      scroll();
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      visibleClass,
      onOpen,
    }),
    [visibleClass, onOpen],
  );

  return (
    <AppContext.Provider value={contextValue}>
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
              <Scrollbutton isvisible={visibleClass} onClick={scrollButton} />
              <Header openModal={onOpen}/>
              <Nav
                display="flex"
                position="static"
                width="100%"
                bottom="0px"
                isvisible="isvisible"
              />
              {children}
              <Footer />
              <Nav
                display="flex"
                position="fixed"
                width="100%"
                bottom="0px"
                isvisible={visibleClass}
              />
            </>
          )}
        </Formik>
      </ChakraProvider>
    </AppContext.Provider>
  );
}
