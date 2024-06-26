import React, { useMemo, useState, useCallback } from "react";
import { Formik } from "formik";
import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import OrderModal from "./OrderModal";
import Scrollbutton from "./Scrollbutton";
import Nav from "./Nav";
import AppContext from "../context/index";
import ImageModal from "./ImageModal";

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
  categories: {
    kitchen: false,
    hallway: false,
    dressingRoom: false,
    closet: false,
    other: false,
  },
};

axios.defaults.baseURL = "https://tqmebel.ru";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default function Layout({ children, display }) {
  const { isOpen, onOpen, onClose } = useDisclosure({ id: "order-modal" });

  const [visibleClass, setVisibleClass] = useState("hidden");
  const [oppen, setopen] = useState("hidden");
  const [modalType, setModalType] = useState("");
  const [page, setPage] = useState(0);
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const closeImagePopup = () => {
    setopen("hidden");
  };

  const openImagePopup = (UrlPhoto) => () => {
    setopen("visibility");
    setPhoto(UrlPhoto);
  };

  const openModal = useCallback(
    (type) => () => {
      setModalType(type);
      onOpen();
    },
    [onOpen],
  );

  const isModal = useMemo(() => {
    return modalType === "order" || modalType === "simple";
  }, [modalType]);

  const getStringCategories = (categories) => {
    const categoriesArray = [];

    categories.closet && categoriesArray.push("шкафы");
    categories.dressingRoom && categoriesArray.push("гардеробные");
    categories.kitchen && categoriesArray.push("кухни");
    categories.other && categoriesArray.push("другое");

    return `${categoriesArray}`;
  };

  const hanldeSubmit = useCallback(
    (values, { resetForm }) => {
      if (modalType === "order" && page !== 1) {
        setPage((currentPage) => currentPage + 1);
        return;
      }

      setIsLoading(true);

      const category = getStringCategories(values.categories);

      axios
        .post("/mail", { name: values.name, phone: values.phone, category })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            toast({
              title: "Данные для связи отправленны",
              description: "Мы скоро с вами свяжемся",
              status: "success",
              duration: 5000,
              isClosable: true,
            });

            if (isModal) {
              onClose();
              setPage(0);
            }

            setIsLoading(false);
            resetForm();
          }
        })
        .catch(() => {
          toast({
            title: "Что-то пошло не так",
            description: "Попробуйте снова через 15 минут",
            status: "error",
            duration: 5000,
            isClosable: true,
          });

          if (isModal) {
            onClose();
            setPage(0);
          }

          resetForm();
          setIsLoading(false);
        });
    },
    [isModal, page, modalType],
  );

  const closeModal = (resetForm) => () => {
    setPage(0);
    onClose();
    resetForm();
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
      isLoading,
      onModalOpen: openModal,
      onImageModalOpen: openImagePopup,
    }),
    [visibleClass, openModal, openImagePopup],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <ChakraProvider theme={theme}>
        <Formik initialValues={initialValues} onSubmit={hanldeSubmit}>
          {(props) => (
            <>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <OrderModal
                  page={page}
                  type={modalType}
                  values={props.values}
                  onSubmit={props.handleSubmit}
                  closeModal={closeModal(props.resetForm)}
                />
              </Modal>
              <Scrollbutton isvisible={visibleClass} onClick={scrollButton} />
              <ImageModal
                oppen={oppen}
                closeImagePopup={closeImagePopup}
                photoUrl={photo}
              />
              <Header display={display} />
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
