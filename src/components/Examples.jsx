import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border } from "@chakra-ui/react";

import kithen from "../images/Kithen.jpg";
import gar from "../images/gar.jpg";
import shkaff from "../images/shkaff.jpg";
import prih from "../images/prih2.jpeg";

const Examples = () =>
    <Flex flexDirection="column" bg='#f1f3f9' color="#79B52D" fontSize='2rem' padding={5}>
        <Text margin="auto">Примеры наших работ</Text>
        <Grid  color="black" gridTemplateColumns={{ xl: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr', md: '1fr 1fr', sm: "1fr" }}>
            <Link href="/kitchen/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box>
                    <Image src={kithen} borderRadius="15px" />


                </Box>
                <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Кухни</Text>
                <Text paddingTop={2} fontWeight="bold">от 50 000 р</Text>
                <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Кухня – одно из самых эмоциональных мест. Это эпицентр воспоминаний и приятных встреч</Text>
            </Link>
            <Link href="/cabinets/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box>
                    <Image src={shkaff} borderRadius="15px" />


                </Box>
                <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Шкафы</Text>
                <Text paddingTop={2} fontWeight="bold">от 30 000 р</Text>
                <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Рациональная организация пространства – это настоящая философия выбора мебели</Text>
            </Link>
            <Link href="/wardrobes/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box>
                    <Image src={gar} borderRadius="15px" />
                </Box>
                <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Гардеробные</Text>
                <Text paddingTop={2} fontWeight="bold">от 25 000 р</Text>
                <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Рациональная организация пространства – это настоящая философия выбора мебели</Text>
            </Link>
            <Link href="/hallways/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box>
                    <Image src={shkaff} borderRadius="15px" />


                </Box>
                <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Прихожие</Text>
                <Text paddingTop={2} fontWeight="bold">от 25 000 р</Text>
                <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>это визитная карточка дома, при взгляде на которую у гостей и посетителей формируется первое впечатление обо всём интерьере.</Text>
            </Link>

        </Grid>
    </Flex>


export default Examples;
