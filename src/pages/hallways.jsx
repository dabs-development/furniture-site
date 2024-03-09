import * as React from "react";
import { Grid, Box, Image } from "@chakra-ui/react";

import Category from "../components/Category";
import Layout from "../components/layout";

import photos from "../model/hallwaysPhoto";

const mainText =
  "Современные прихожие восхищают своей функциональностью и стильным дизайном. Они представляют собой идеальное сочетание практичности и эстетики, создавая приветливое и уютное пространство для встречи гостей и хранения повседневных предметов. Благодаря инновационным решениям в дизайне, современные прихожие предлагают широкий выбор многофункциональных элементов, таких как вешалки, шкафчики для обуви, зеркала, крючки и даже удобные сиденья. Это позволяет эффективно использовать пространство и обеспечивает комфортное хранение различных предметов, от верхней одежды до ключей и сумок.";

const Hallways = () => {
  const [display] = React.useState("none");

  return (
    <Layout display={display}>
      <Category name="Прихожие" mainText={mainText} block="context">
      <Grid
        gap={5}
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          gridTemplateRows="1fr"
        >
          {photos?.map((photo, index) => (
            <Box key={`image-${index}`} height={340} width="100%" cursor="pointer" _hover={{ textDecoration: "none", transform: 'scale(1.05)' }}>
              <Image src={photo} backgroundPosition="center" objectFit="cover" Width="100%" height="100%"/>
            </Box>
          ))}
        </Grid>
        </Category>
    </Layout>
  );
};

export default Hallways;

export const Head = () => <title>Прихожие</title>;
