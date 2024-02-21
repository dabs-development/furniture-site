import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Tabs, TabList,Tab,ButtonGroup, Button } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Flex, Spacer ,Link} from '@chakra-ui/react'
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
    useDisclosure
} from '@chakra-ui/react'







const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <Box as="header" bg='linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)' height='270px'>
            <Box width="100%" display='flex' bg="#ffffff">
                <Tabs m="auto" >
                    <TabList  >
                        <Tab fontSize='2xl'>Акции</Tab>
                        <Tab fontSize='2xl'>Примеры работ</Tab>
                        <Tab fontSize='2xl'>Отзывы</Tab>
                        <Tab fontSize='2xl'>Контакты</Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Flex>
       
                <Box paddingTop='15px' paddingBottom='15px' marginLeft="2%">
                    <StaticImage

                        src="../images/fur.avif"
                        width={100}
                        quality={95}
                        style={{ backgroundSize: 'cover' }}
                    />
                </Box>
                <Spacer />
                <ButtonGroup gap='2' paddingTop='65px' paddingLeft='18%'>
                    <Button colorScheme='teal' onClick={onOpen}>ОСТАВИТЬ ЗАЯВКУ</Button>
                    <Button colorScheme='teal'>НАПИСАТЬ В WHATSAPP</Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <Input ref={initialRef} placeholder='First name' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input placeholder='Last name' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </ButtonGroup>
                <Spacer />
                <Box paddingTop='35px'>Собственное производство<br />
                    Телефон: +7 (999) 999-38-96<br />
                    Почта: mebel.top.qa@gmail.com</Box>
                <Spacer />
            </Flex>
            <Flex bg='#4E4A49' height='75PX' color="#fff" >
                <Flex margin="auto" justifyContent='space-evenly' width='100%' >
                    <Link _hover={{textDecoration:"none",opacity:'0.7'}}>КУХНИ</Link>
                    <Link _hover={{textDecoration:"none", opacity:'0.7'}}>ШКАФЫ</Link>
                    <Link _hover={{textDecoration:"none", opacity:'0.7'}}>ГАРДЕРОБНЫЕ</Link>
                    <Link _hover={{textDecoration:"none", opacity:'0.7'}}>ПРИХОЖИЕ</Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header


                                    