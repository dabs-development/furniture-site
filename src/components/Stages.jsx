import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border } from "@chakra-ui/react";

import video from "../images/untitled1.mp4";

const Stages = () =>

    <Flex bg="fff" color="black" flexDirection="column" paddingLeft={5} paddingRight={5} paddingBottom={7} paddingTop={4}>
        <Flex flexDirection="column" padding={5} borderLeft="3px solid #79B52D">
            <Text fontSize={{ sm: "2rem", md: "2rem", xl: "3rem" }}>КАК МЫ РАБОТАЕМ</Text>
            <Text fontSize={{ sm: "1.4rem", md: "1.4rem", xl: "3rem" }} color="#79B52D">Схема работы</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" flexDirection={{ xl: 'row', lg: 'row', md: 'column ', sm: "column" }}>
            <Grid gridTemplateColumns={{ xl: '1fr 1fr ', lg: '1fr 1fr ', md: '1fr ', sm: "1fr" }} gap={5} >
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontSize='2rem' fontWeight='bold' marginLeft="auto">01</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Знакомство</Text>
                    <Text>Вы звоните нам или пишите, и мы обсуждаем детали того, что вас интересует</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontWeight='bold' fontSize='2rem' marginLeft="auto">02</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Замер</Text>
                    <Text>Выезжаем на замер и согласовываем дизайн проект</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontWeight='bold' fontSize='2rem' marginLeft="auto">03</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Проектирование</Text>
                    <Text>Составляем дизайн-проект и просчитываем стоимость</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontWeight='bold' fontSize='2rem' marginLeft="auto">04</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Заключение договора</Text>
                    <Text>У нас фиксированная оплата</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontWeight='bold' fontSize='2rem' marginLeft="auto">05</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Изготовление</Text>
                    <Text>Изготовление мебели в оговоренные сроки</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                    <Text color="#79B52D" fontWeight='bold' fontSize='2rem' marginLeft="auto">06</Text>
                    <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Доставка и монтаж</Text>
                    <Text>Договариваемся о дате, привозим и устанавливаем</Text>
                </Flex>
            </Grid>
            <Flex minW="330px" margin={5} padding={5} boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)' borderRadius={5} height={550}>
                <video  controls autoPlay="autoplay" loop>
                <source src={video} type="video/mp4" autoPlay="autoplay"/>
                </video>
            </Flex>
        </Flex>
    </Flex>



export default Stages;