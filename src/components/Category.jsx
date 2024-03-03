import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border, Button, } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Category = ({ openModal}) => {

    console.log(openModal)
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            <Header openModal={openModal} />
            <Nav display="flex" position="static" width="100%" bottom="0px" isvisible='isvisible'/>

            <Flex bg="fff" color="black" flexDirection="column" paddingLeft={5} paddingRight={5} paddingBottom={7} paddingTop={4} width="80%" margin="auto">
                <Flex paddingBottom={5}>
                <Link href='/'><Text paddingRight={2} color="#79B52D">Главная</Text></Link>
                <Text paddingLeft={2} color="black" opacity="0.5"  borderLeft="2px solid #79B52D">Кухни</Text>
                </Flex>
                <Flex flexDirection="column" padding={5} borderLeft="3px solid #79B52D">
                    <Text fontSize="3rem">Кухни</Text>
                    <Text fontSize="2rem" color="#79B52D">Фотогалерея готовых проектов</Text>
                </Flex>
                <Text paddingBottom={5} paddingTop={5}>Мебель на кухне – это не только функциональные предметы, но и элементы, придающие уют и стиль этому пространству. Она создает атмосферу комфорта и гармонии, сочетая в себе изящество дизайна и практичность использования. Каждая деталь мебели – будь то стильный стол, удобные стулья или элегантные шкафы – добавляет неповторимый шарм кухонному интерьеру, делая его привлекательным и функциональным одновременно. Мебель на кухне – это место, где красота встречается с удобством, создавая идеальную среду для приготовления пищи и приятного времяпрепровождения.</Text>
            </Flex>
            <Footer />
        </>
    )
}

export default Category;
