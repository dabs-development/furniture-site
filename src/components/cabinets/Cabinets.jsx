import React, { useContext } from "react";
import { Grid, Box, Image } from "@chakra-ui/react";
import Category from "../Category";
import Layout from "../layout";

import photos from "../../model/cabinetPhoto";
import AppContext from "../../context";

const mainText =
  "Современные шкафы представляют собой элегантное сочетание функциональности и стиля. Их четкие линии и изысканные отделения создают впечатляющий внешний вид, который подчеркивает современный интерьер. Материалы, используемые в производстве, отличаются прочностью и долговечностью, добавляя шкафам утонченный шарм. Современные шкафы очаровывают своей функциональностью: они предлагают широкий выбор встроенных элементов для хранения, включая выдвижные ящики, вешалки, полки и даже встроенную подсветку. В результате создается визуально привлекательное и удобное пространство для хранения одежды, обуви и других предметов.";

const Cabinets = () => {

  const context = useContext(AppContext);
  return (

      <Category
        name="Шкафы"
        mainText={mainText}
        block="context">
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
              <Image src={photo} backgroundPosition="center" objectFit="cover" width="100%" height="100%"/>
            </Box>
          ))}
        </Grid>
        </Category>
  );
};

export default Cabinets;


