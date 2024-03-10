import React, { useContext } from "react";
import { Grid, Box, Image } from "@chakra-ui/react";

import Category from "../Category";


import photos from "../../model/wardrobesPhoto";
import AppContext from "../../context";

const mainText =
  "Современные гардеробные помещения представляют собой пространства роскошного уюта и функциональной организации. Они обычно имеют стильный дизайн, отличающийся элегантными линиями и высококачественными отделками. Благодаря передовым технологиям и инновационным решениям, современные гардеробные могут быть полностью адаптированы к потребностям владельца, предлагая широкий спектр модульных элементов для хранения одежды, обуви, аксессуаров и других вещей.";

const Wardrobes = () => {
    const context = useContext(AppContext);

  return (
    
      <Category name="Гардеробные" mainText={mainText} block="context">
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
            <Box key={`image-${index}`} height={340} width="100%" cursor="pointer" _hover={{ textDecoration: "none", transform: 'scale(1.05)' }} onClick={context.onImageModalOpen(photo)}>
              <Image src={photo} backgroundPosition="center" objectFit="cover" Width="100%" height="100%"/>
            </Box>
          ))}
        </Grid>
      </Category>

  );
};

export default Wardrobes;


