import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Image, Grid, border } from "@chakra-ui/react";
import { Link } from "gatsby"

import kithen from "../images/Kithen.jpg";
import gar from "../images/gar(1).jpg";
import shkaff from "../images/shkaff.jpg";
import prih from "../images/prih(1).jpg";

const Examples = () =>
    <Flex flexDirection="column" bg='#f1f3f9' color="#79B52D" fontSize='2rem' padding={5} id="examples">
        <Text fontSize={{sm: "1.8rem", md: "1.8rem", xl: "3rem"}} margin="auto">Примеры наших работ</Text>
        <Grid color="black" gridTemplateColumns={{ xl: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr', md: '1fr 1fr', sm: "1fr" }}>
            <Link to="/kitchen/" >
                <Box display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                    <Box height={400} width="100%">
                        <Image src={kithen} borderRadius="15px" backgroundPosition="center" objectFit="cover" width="100%" height="100%"/>
                    </Box>
                    <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Кухни</Text>
                    <Text paddingTop={2} fontWeight="bold">от 80 000 р</Text>
                    <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Кухня – одно из самых эмоциональных мест. Это эпицентр воспоминаний и приятных встреч</Text>
                </Box>
            </Link>
            <Link to="/cabinets/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                    <Box height={400} width="100%">
                        <Image src={shkaff} borderRadius="15px" backgroundPosition="center" objectFit="cover" width="100%" height="100%"/>
                    </Box>
                    <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Шкафы</Text>
                    <Text paddingTop={2} fontWeight="bold">от 30 000 р</Text>
                    <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Рациональная организация пространства – это настоящая философия выбора мебели</Text>
                </Box>
            </Link>
            <Link to="/wardrobes/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                    <Box height={400} width="100%">
                        <Image src={gar} borderRadius="15px" backgroundPosition="center" objectFit="cover" width="100%" height="100%"/>
                    </Box>
                    <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Гардеробные</Text>
                    <Text paddingTop={2} fontWeight="bold">от 40 000 р</Text>
                    <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Рациональная организация пространства – это настоящая философия выбора мебели</Text>
                </Box>
            </Link>
            <Link to="/hallways/" display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                <Box display="flex" flexDirection="column" padding={5} _hover={{ textDecoration: "none", transform: 'scale(0.95)' }}>
                    <Box height={400} width="100%">
                        <Image src={prih} borderRadius="15px" backgroundPosition="center" objectFit="cover" width="100%" height="100%"/>
                    </Box>
                    <Text paddingTop={2} fontSize='2rem' color="#79B52D" fontWeight="bold">Прихожие</Text>
                    <Text paddingTop={2} fontWeight="bold">от 25 000 р</Text>
                    <Text paddingTop={2} fontSize={{ sm: "1rem", md: "1rem", xl: "1.5rem" }}>Визитная карточка дома, при взгляде на которую у гостей и посетителей формируется первое впечатление обо всём интерьере.</Text>
                </Box>
            </Link>

        </Grid>
    </Flex>


export default Examples;
