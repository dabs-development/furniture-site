
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border, Button } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import Carousel from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import otzz1 from "../images/otzz1.jpg";
import otzz2 from "../images/otzz2.jpg";
import otzz3 from "../images/otzz3.jpg";
import otzz4 from "../images/otzz4.jpg";
import otzz5 from "../images/otzz5.jpg";
import otzz6 from "../images/otzz6.jpg";






const Comment = () => {
    const [windowWidth, setWindowWidth] = useState();
    const [sliderShow, setSliderShow] = useState(3);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: sliderShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // milliseconds
        waitForAnimate: false,
    };



    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (window.innerWidth <= 530) {
            setSliderShow(1)
        } else if (window.innerWidth <= 770) {
            setSliderShow(2)
        } else {
            setSliderShow(3)
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowWidth])

    return (
    <Flex bg='#f1f3f9' color="black" flexDirection="column" paddingLeft={5} paddingRight={5} paddingBottom={7} paddingTop={4} id="comment">
        <Flex flexDirection="column" padding={5} borderLeft="3px solid #79B52D" marginBottom={5}>
            <Text fontSize={{ sm: "2rem", md: "2rem", xl: "3rem" }}>ОТЗЫВЫ</Text>
            <Text fontSize={{sm: "1.4rem", md: "1.4rem", xl: "3rem"}} color="#79B52D">Мы работаем для вас и стараемся быть лучше</Text>
        </Flex>
        <Carousel {...settings}>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz1} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz2} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz3} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz4} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz5} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
            <Flex
                fontSize="20rem"
                width="100%"
                bg='#f1f3f9'
            >
                <Box height={500} width={232} margin="auto">
                    <Image
                        src={otzz6} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .8),
            23px 0 20px -23px rgba(0, 0, 0, .8),
            0 0 40px rgba(0, 0, 0, .1) inset;"/>
                </Box>
            </Flex>
        </Carousel>
    </Flex>
    )
}


export default Comment;