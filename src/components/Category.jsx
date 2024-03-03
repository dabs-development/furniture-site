import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border, Button, } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import Header from "./Header";
import Nav from "./Nav";

const Category = ({ openModal,display,position,width,bottom,isvisible}) => {

  console.log(openModal)
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
    <Header openModal={openModal}/>
    <Nav/>
    </>
    )
}

export default Category;
