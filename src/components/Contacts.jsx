import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Tabs, TabList, Tab, ButtonGroup, Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer, Link } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Text
} from '@chakra-ui/react'
import { wrap } from "framer-motion"







const Contacts = () => {


    return (
        <Flex width='100%'
            padding={5}
            wrap={wrap}
            backgroundImage="url('/src/images/kux.jpg)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"> 
            <Flex maxWidth="1000px" margin="auto" flexDirection='column'>
                <Text fontSize={'6xl'} marginLeft={7}>Связаться с нами</Text>
                <Wrap  >
                    <WrapItem flexDirection={"column"} marginLeft={7}>
                        <Text fontWeight="bold" fontSize={'3xl'}>В сети</Text>
                        <Box height="1px" bg={"black"} width={'100%'}></Box>
                        <Text fontSize={'2xl'}>555-555-5555</Text>
                        <Text fontSize={'2xl'}>info@mailservice.com</Text>
                        <Flex gap={5} paddingTop={5}>
                            <Link >
                                <StaticImage
                                    src="../images/what.png"
                                    width={55}
                                    quality={95}
                                    style={{ backgroundSize: 'cover' }}
                                />
                            </Link>
                            <Link>
                                <StaticImage
                                    src="../images/vk.png"
                                    width={33}
                                    quality={95}
                                    style={{ backgroundSize: 'cover' }}
                                />
                            </Link>
                            <Link marginLeft={3}>
                                <StaticImage
                                    src="../images/inst.png"
                                    width={33}
                                    quality={95}
                                    style={{ backgroundSize: 'cover' }}
                                />
                            </Link>
                        </Flex>
                    </WrapItem>
                    <WrapItem flexDirection={"column"} marginLeft={7}>
                        <Text fontWeight="bold" fontSize={'3xl'}>Посетите нас</Text>
                        <Box height={"1px"} bg={"black"} width={'100%'}></Box>
                        <Text fontSize={'2xl'}>Название улицы</Text>
                        <Text fontSize={'2xl'}>Почтовый индекс, Страна</Text>
                    </WrapItem>
                    <WrapItem flexDirection={"column"} marginLeft={7}>
                        <Text fontWeight="bold" fontSize={'3xl'}>Рабочие часы</Text>
                        <Box height={"1px"} bg={"black"} width={'100%'}></Box>
                        <Text fontSize={'2xl'}>Пн–Пт</Text>
                        <Text fontSize={'2xl'}>9:00–17:00</Text>
                        <Text fontSize={'2xl'}>Сб–Вс</Text>
                        <Text fontSize={'2xl'}>Выходной</Text>
                    </WrapItem>
                </Wrap>
            </Flex>
        </Flex>
    )
}

export default Contacts


