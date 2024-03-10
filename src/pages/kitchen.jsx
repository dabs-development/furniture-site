import  React, {useContext} from "react";

import { Grid, Box, Image } from "@chakra-ui/react";

import Category from "../components/Category";
import Layout from "../components/layout";
import ImageModal from "../components/ImageModal";

import photos from "../model/kitchenPhotos";
import AppContext from "../context";

const mainText =
  "Мебель на кухне – это не только функциональные предметы, но и элементы,придающие уют и стиль этому пространству. Она создает атмосферу комфортаи гармонии, сочетая в себе изящество дизайна и практичностьиспользования. Каждая деталь мебели – будь то стильный стол, удобныестулья или элегантные шкафы – добавляет неповторимый шарм кухонномуинтерьеру, делая его привлекательным и функциональным одновременно.Мебель на кухне – это место, где красота встречается с удобством,создавая идеальную среду для приготовления пищи и приятноговремяпрепровождения.";

const IndexPage = () => {
  const [display] = React.useState("none");
 
  const context = useContext(AppContext);
  console.log(context)

  return (
    <Layout display={display}>
      <Category name="Кухни" mainText={mainText} block="context">
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
            <Box key={`image-${index}`} height={340} width="100%" cursor="pointer" _hover={{ textDecoration: "none", transform: 'scale(1.05)' }} onClick={context.onImageModalOpen}>
              <Image src={photo} backgroundPosition="center" objectFit="cover" Width="100%" height="100%"/>
            </Box>
          ))}
        </Grid>
      </Category>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Кухни</title>;
