import React from "react";
import Carousel from "react-slick";
import { Box, Flex } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  waitForAnimate: false,
};

const Reviews = () => {
  return (
    <Box height="34rem" width="100%">
      <Carousel {...settings}>
        <Flex
          padding="0 5rem"
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          bgColor="#ffcccc"
        >
          1
        </Flex>
        <Flex
          padding="0 5rem"
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          bgColor="#e0b8c2"
        >
          2
        </Flex>
        <Flex
          padding="0 5rem"
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          bgColor="#ba9eb5"
        >
          3
        </Flex>
        <Flex
          padding="0 5rem"
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          bgColor="#8c80a6"
        >
          4
        </Flex>
        <Flex
          padding="0 5rem"
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          bgColor="#666699"
        >
          5
        </Flex>
      </Carousel>
    </Box>
  );
};

export default Reviews;
