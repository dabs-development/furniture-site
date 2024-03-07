import * as React from "react";
import { Box, Wrap, WrapItem, Text, Flex, Link, Image, Grid, border } from "@chakra-ui/react";

const Advantages = () => 

<Flex bg="fff"  color="black" flexDirection="column" paddingLeft={5}  paddingRight={5} paddingBottom={7} paddingTop={4}>
        <Flex flexDirection="column" padding={5}  borderLeft="3px solid #79B52D">
            <Text fontSize={{ sm: "2rem", md: "2rem", xl: "3rem" }}>ПОЧЕМУ МЫ</Text>
            <Text fontSize={{sm: "1.4rem", md: "1.4rem", xl: "3rem"}} color="#79B52D">Преимущества сотрудничества с нами</Text>
        </Flex>
        <Grid gridTemplateColumns={{ xl: '1fr 1fr', lg: '1fr 1fr', md: '1fr 1fr', sm: "1fr" }} gap={5} >
            <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow= '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                <Text color="##6b6b6b" opacity="0.3" fontSize='3rem' fontWeight='bold' marginLeft="auto">01</Text>
                <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Всё <Text color="#79B52D">под ключ </Text></Text>
                <Text>Выполняем полный цикл работ: замеряем, изготавливаем, привозим, устанавливаем. Мы всегда стараемся дать заказчику больше, чем он ожидает от консультации до готового продукта.</Text>
            </Flex>
            <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow= '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                <Text color="##6b6b6b" opacity="0.3" fontWeight='bold' fontSize='3rem' marginLeft="auto">02</Text>
                <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'>Мы <Text color="#79B52D">за качество</Text></Text>
                <Text>Считаем этот критерий важнейшим по умолчанию. Мы работаем на современном оборудовании, только с проверенными поставщиками, с применением качественных материалов и комплектующих.</Text>
            </Flex>
            <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow= '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                <Text color="##6b6b6b" opacity="0.3" fontWeight='bold' fontSize='3rem' marginLeft="auto">03</Text>
                <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'><Text color="#79B52D">Эксклюзивность</Text> и эргономика</Text>
                <Text>Учитываем всё и создаем мебель специально для вас, основываясь на ваших конкретных потребностях и с учетом всех параметров помещения. И не беда, если вы ещё сами не до конца осознали, что вам нужно. Заказ не уйдет в работу пока не будет достигнут результат: “Да! Это именно то, что нужно!”</Text>
            </Flex>
            <Flex flexDirection="column" padding={5} borderRadius={5} boxShadow= '0px -5px 10px 0px rgba(0, 0, 0, 0.5)'>
                <Text color="##6b6b6b" opacity="0.3" fontWeight='bold' fontSize='3rem' marginLeft="auto">04</Text>
                <Text paddingTop={2} paddingBottom={2} fontSize='1.7rem' fontWeight='bold'><Text color="#79B52D">Наша философия</Text> - ваш комфорт</Text>
                <Text>Предоставляем оптимальные условия для заказчика. Поможем с любым неординарным решением, выбором стиля, цвета, материалов или расположения мебели. Объясним на чем можно сэкономить, а на что стоит обратить внимание. В вашем распоряжении наша честность и огромный опыт в решении задач различного уровня сложности.
- Если вы цените оригинальность и качество, не желаете мириться с банальностью, сотрудничество с нами – лучший из возможных выборов.</Text>
            </Flex>
        </Grid>
      </Flex>



export default Advantages;