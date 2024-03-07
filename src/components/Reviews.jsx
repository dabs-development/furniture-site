import React, { useContext } from "react";
import Carousel from "react-slick";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fon from "../images/fon1.jpg";
import fonn from "../images/fon2.jpeg";
import AppContext from "../context";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // milliseconds
  waitForAnimate: false,
};

const Reviews = () => {
  const context = useContext(AppContext);

  return (
    <Box height="34rem" width="100%">
      <Carousel {...settings}>
        <Flex
          fontSize="20rem"
          color="#fff"
          width="100%"
          backgroundImage={fon}
          position="relative"
          height="max-content"
        >
          <Box
            position="absolute"
            zIndex={10}
            top={{ xl: "90px", lg: "90px", md: "90px", sm: "50px" }}
            left={{ xl: "110px", lg: "70px", md: "50px", sm: "20px" }}
            display="flex"
            flexDirection="column"
          >
            <Text fontSize="2rem" fontWeight="bold">
              КОРПУСНАЯ МЕБЕЛЬ
              <br />
              НА ЗАКАЗ
            </Text>
            <Text marginBottom={5} fontSize="1.5rem">
              Функциональная, красивая и долговечная мебель – это Наша мебель
            </Text>
            <Button
              bg="#79B52D"
              colorScheme="teal"
              onClick={context.onModalOpen("simple")}
              width={{ xl: "350px", lg: "350px", md: "350px", sm: "300px" }}
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </Button>
          </Box>
          <Flex
            width="100%"
            bg="#000"
            height="32rem"
            opacity="0.6"
            flexDirection="column"
          >
            <br />
          </Flex>
        </Flex>
        <Flex
          fontSize="20rem"
          color="#fff"
          width="100%"
          backgroundImage={fonn}
          position="relative"
          height="max-content"
        >
          <Box
            position="absolute"
            zIndex={10}
            top={{ xl: "90px", lg: "90px", md: "90px", sm: "50px" }}
            left={{ xl: "110px", lg: "70px", md: "50px", sm: "20px" }}
            display="flex"
            flexDirection="column"
          >
            <Text fontSize="2rem" fontWeight="bold">
              СОЗДАДИМ СОВРЕМЕННУЮ И ПРАКТИЧНУЮ
              <br />
              МЕБЕЛЬ ПО ВАШИМ РАЗМЕРАМ
            </Text>
            <Text marginBottom={5} paddingTop={5} fontSize="1.5rem">
              Мы позаботимся о том, чтобы Ваша мебель была собрана специалистом
            </Text>
            <Button
              bg="#79B52D"
              colorScheme="teal"
              onClick={context.onModalOpen("simple")}
              width={{ xl: "350px", lg: "350px", md: "350px", sm: "300px" }}
            >
              УЗНАТЬ ПОДРОБНЕЕ
            </Button>
          </Box>
          <Flex
            width="100%"
            bg="#000"
            height="32rem"
            opacity="0.6"
            flexDirection="column"
          >
            <br />
          </Flex>
        </Flex>
      </Carousel>
    </Box>
  );
};

export default Reviews;
