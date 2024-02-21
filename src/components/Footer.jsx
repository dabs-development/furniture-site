import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Tabs, TabList, Tab, ButtonGroup, Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer, Link } from '@chakra-ui/react'
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







const Footer = () => {


    return (
        <Box as="footer" bg='linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)' height='170px'>
            <Flex margin="auto" justifyContent='space-evenly' width='100%' paddingTop={30}>
                <Box>
                    <StaticImage
                        src="../images/fur.avif"
                        width={100}
                        quality={95}
                        style={{ backgroundSize: 'cover' }}
                    />
                </Box>
                <Flex gap={5} paddingTop={5}>
                    <Link>
                    <StaticImage
                        src="../images/what.png"
                        width={65}
                        quality={95}
                        style={{ backgroundSize: 'cover' }}
                    />
                    </Link>
                    <Link>
                    <StaticImage
                        src="../images/vk.png"
                        width={43}
                        quality={95}
                        style={{ backgroundSize: 'cover' }}
                    />
                    </Link>
                    <Link marginLeft={3}>
                    <StaticImage
                        src="../images/inst.png"
                        width={43}
                        quality={95}
                        style={{ backgroundSize: 'cover' }}
                    />
                    </Link>
                </Flex>
                <Flex flexDirection="column">
                    <Text>+7 (999) 999-38-96</Text>
                    <Text>mebel.top.qa@gmail.com</Text>
                    <Text>Москва,пр-лавешкина. 45/4</Text>
                </Flex>
                <Flex flexDirection="column">
                    <Text>ИП Иван Иванович Иванов</Text>
                    <Text>ИНН: 580315332567</Text>
                    <Text>ОГРНИП: 35345675044541</Text>
                </Flex>
            </Flex>

        </Box>
    )
}

export default Footer


