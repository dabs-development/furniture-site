import React from "react";
import Carousel from "react-slick";
import { Box, Flex } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fon from "../images/fon1.jpg";
import fonn from "../images/fon2.jpeg";

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
          
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          backgroundImage={fon}
        >
          <Flex width="100%" bg="#000" height="32rem" opacity="0.6">

          </Flex>
        </Flex>
        <Flex
          fontSize="20rem"
          color="#fff"
          height="32rem"
          width="100%"
          backgroundImage={fonn}
        >
         <Flex width="100%" bg="#000" height="32rem" opacity="0.6">
            
          </Flex>
        </Flex>
      </Carousel>
    </Box>
  );
};

export default Reviews;
