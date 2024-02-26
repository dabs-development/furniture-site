import * as React from "react";
import {
    Grid,
    GridItem,
    Image,
    Text
} from "@chakra-ui/react";

import fit from "../images/fit.jpeg";

const Individual = () => (

    <Grid bg='#f1f3f9' color="#fff" gridTemplateColumns={{ xl: '1fr 2fr', lg: '1fr 2fr', md: '1fr' }} width='90%' margin="auto" padding={5} marginTop={8} zIndex={10} boxShadow="0 1px 4px rgba(0, 0, 0, .3),
    -23px 0 20px -23px rgba(0, 0, 0, .8),
    23px 0 20px -23px rgba(0, 0, 0, .8),
    0 0 40px rgba(0, 0, 0, .1) inset;" marginBottom={5}>
        <GridItem >
            <Image
                margin="auto"
                width={{ md: "400px" }}
                src={fit}
                style={{ backgroundSize: "none" }}
            />
        </GridItem>
        <GridItem color="black" paddingLeft={5}>
            <Text textAlign={{ lg: "start", md: "center", }} fontSize={{ sm: "1.5rem", md: "2rem", xl: "2.5rem" }}>Нужна мебель по индивидуальным размерам? Звоните 8(123) 456 7890</Text>
            <Text textAlign={{ lg: "start", md: "center", }} fontSize={{ sm: "0.8rem", md: "1rem", xl: "1.5rem" }}>Наши специалисты проведут квалифицированную консультацию по всем имеющимся у Вас вопросам!</Text>
        </GridItem>
    </Grid>

);

export default Individual;
