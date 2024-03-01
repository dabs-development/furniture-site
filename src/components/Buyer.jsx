import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border,GridItem } from "@chakra-ui/react";

import tools from "../images/tools.png";
import money from "../images/money.png";
import warehouse from "../images/warehouse.png";

const Buyer = () =>

    <Flex flexDirection="column" bg="#f1f3f9" marginBottom={5} paddingBottom={5} paddingLeft={5} paddingRight={5}>
        <Text margin="auto" marginTop={5} fontSize="2rem" fontWeight="bold" color="#79B52D">ПОКУПАТЕЛЮ</Text>
        <Grid margin="auto" gap={5}  gridTemplateColumns={{ xl: '1fr 1fr 1fr', lg: '1fr 1fr 1fr', md: '1fr 1fr', sm: "1fr" }}>
        <GridItem  >
            <Flex flexDirection="column" >
                <Flex boxSize="110px" marginRight="auto" marginLeft="auto" padding={5}>
                    <Image
                        src={tools}

                    />
                </Flex>
                <Text textAlign="center" color="#79B52D" fontSize="1.5rem" fontWeight="bold">Сборка</Text>
                <Text textAlign="center"> Мы позаботимся о том, чтобы Ваша мебель была собрана специалистом. Мастер приедет в удобное время для Вас. Стоимость услуг сборщика - 10% от стоимости проекта (дополнительные работы оплачиваются отдельно)</Text>
            </Flex>
        </GridItem>
        <GridItem >
            <Flex flexDirection="column" >
                <Flex boxSize="110px" marginRight="auto" marginLeft="auto" padding={5}>
                    <Image
                        src={warehouse}

                    />
                </Flex>
                <Text textAlign="center" color="#79B52D" fontSize="1.5rem" fontWeight="bold">Доставка</Text>
                <Text textAlign="center"> Осуществляется бесплатно по Москве и МО. Осуществляется по адресу, который указал покупатель. Мебель доставляется в разобранном виде.</Text>
            </Flex>
        </GridItem>
        <GridItem >
            <Flex flexDirection="column" >
                <Flex boxSize="110px" marginRight="auto" marginLeft="auto" padding={5}>
                    <Image
                        src={money}

                    />
                </Flex>
                <Text textAlign="center" color="#79B52D" fontSize="1.5rem" fontWeight="bold">Оплата</Text>
                <Text textAlign="center"> Мы работаем с 50%-й предоплатой. Оплату можно произвести наличными при получении, либо безналичным платежом.</Text>
            </Flex>
        </GridItem>
        </Grid>
    </Flex>



export default Buyer;