import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border, Button, } from "@chakra-ui/react";
import { wrap } from "framer-motion";

import fon3 from "../images/fon3.jpg";
import fon4 from "../images/fon4.webp";
import fon5 from "../images/fon5.webp";


const Stock = ({ openModal}) => {


    return (

    <Flex bg="#f1f3f9" flexDirection="column">
        <Text margin="auto" fontSize="3rem" fontWeight="bold">Наши акции</Text>
        <Flex margin='auto' flexDirection={{ xl: 'row', lg: 'column', md: 'column', sm: "column" }} color="#fff">
            <Flex width={{xl:400,lg:400,md:400,sm:350}} height={200} position="relative" backgroundImage={fon3} backgroundPosition="center" marginTop={10} marginRight={{ xl: '10', lg: '0', md: '0', sm: '0' }} borderEndRadius={5} boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);">
                <Flex width='68%' bg="#303d4d" opacity="0.5" borderEndRadius={5}>
                    <br />
                </Flex>
                <Box position="absolute" border="2px solid #ffd700" top={5} left={2.5} >
                    <Box padding={5} >
                        <Text fontWeight="bold" fontSize="1.1rem">НОВОСЕЛАМ,<br />ПЕНСИОНЕРАМ,<br />ВОЕННОСЛУЖАЩИМ</Text>
                        <Text fontWeight="bold" color="#ffd700"> СКИДКИ ДО 15%</Text>
                        <Text>На всю <span style={{ color: "#ffd700" }} >корпусную</span> мебель</Text>
                    </Box>
                </Box>
                <Flex><br /></Flex>
            </Flex>
            <Flex width={{xl:400,lg:400,md:400,sm:350}} height={200} position="relative" backgroundImage={fon4} backgroundPosition="center" marginTop={10} borderEndRadius={5} boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);">
                <Flex width='68%' bg="#303d4d" opacity="0.5" borderEndRadius={5}>
                    <br />
                </Flex>
                <Box position="absolute" border="2px solid #ffd700" top={5} left={2.5}>
                    <Box padding={5} >
                        <Text fontWeight="bold" fontSize="1.1rem">ПОПРОБУЙ <br />НАШУ,<br /><span style={{ color: "#ffd700" }} >РАССРОЧКУ</span></Text>
                        <Text><span style={{ color: "#ffd700" }} >0 %</span> переплаты. <span style={{ color: "#ffd700" }} >Берем его</span></Text>
                        <Text color="#ffd700">на себя</Text>
                    </Box>
                </Box>
                <Flex><br /></Flex>
            </Flex>
        </Flex>
        <Flex width={{xl:400,lg:400,md:400,sm:350}} height={200} position="relative" backgroundImage={fon5} backgroundPosition="center" margin='auto' marginTop={10} borderEndRadius={5} boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);">
            <Flex width='68%' bg="#303d4d" opacity="0.5" borderEndRadius={5}>
                <br />
            </Flex>
            <Box position="absolute" border="2px solid #ffd700" top={5} left={2.5} color="#fff">
                <Box padding={5} >
                    <Text fontWeight="bold" fontSize="1.1rem">НОВОСЕЛАМ,<br />ПЕНСИОНЕРАМ,<br />ВОЕННОСЛУЖАЩИМ</Text>
                    <Text color="#ffd700" fontWeight="bold">СКИДКИ ДО 15%</Text>
                    <Text color="#ffd700">На всю корпусную мебель</Text>
                </Box>
            </Box>
            <Flex><br /></Flex>
        </Flex>
        <Button bg="#ffd700" colorScheme="teal" onClick={openModal} width={300} margin="auto" marginTop={5} marginBottom={5} boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)">
            УЗНАТЬ БОЛЬШЕ
        </Button>
    </Flex>

    )
}

export default Stock;
