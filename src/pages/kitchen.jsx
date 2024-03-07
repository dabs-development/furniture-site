import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText =
  " Мебель на кухне – это не только функциональные предметы, но и элементы,придающие уют и стиль этому пространству. Она создает атмосферу комфортаи гармонии, сочетая в себе изящество дизайна и практичностьиспользования. Каждая деталь мебели – будь то стильный стол, удобныестулья или элегантные шкафы – добавляет неповторимый шарм кухонномуинтерьеру, делая его привлекательным и функциональным одновременно.Мебель на кухне – это место, где красота встречается с удобством,создавая идеальную среду для приготовления пищи и приятноговремяпрепровождения.";

const IndexPage = ({ location }) => {
  const [display, setDisplay] = React.useState("none");

  return (
    <Layout display={display}>
      <Category name="Кухни" mainText={mainText} block="context" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
