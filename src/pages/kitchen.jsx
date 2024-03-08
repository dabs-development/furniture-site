import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText =
  " Мебель на кухне – это не только функциональные предметы, но и элементы,придающие уют и стиль этому пространству. Она создает атмосферу комфортаи гармонии, сочетая в себе изящество дизайна и практичностьиспользования. Каждая деталь мебели – будь то стильный стол, удобныестулья или элегантные шкафы – добавляет неповторимый шарм кухонномуинтерьеру, делая его привлекательным и функциональным одновременно.Мебель на кухне – это место, где красота встречается с удобством,создавая идеальную среду для приготовления пищи и приятноговремяпрепровождения.";

  const photos = [
    {src: "../images/kux(1).jpg"},
    {src: "../images/kux(2).jpg"},
    {src: "../images/kux(3).jpg"},
    {src: "../images/kux(4).jpg"},
    {src: "../images/kux(5).jpg"},
    {src: "../images/kux(6).jpg"},
    {src: "../images/kux(7).jpg"},
    {src: "../images/kux(8).jpg"},
    {src: "../images/kux(9).jpg"},
    {src: "../images/kux(10).jpg"},
    {src: "../images/kux(11).jpg"},
    {src: "../images/kux(12).jpg"},
    {src: "../images/kux(13).jpg"},
    {src: "../images/kux(14).jpg"},
    {src: "../images/kux(15).jpg"},
    {src: "../images/kux(16).jpg"},
    {src: "../images/kux(17).jpg"},
    {src: "../images/kux(18).jpg"},
    {src: "../images/kux(19).jpg"},
    {src: "../images/kux(20).jpg"},
    {src: "../images/kux(21).jpg"},
  ]
  

const IndexPage = ({ location }) => {
  const [display, setDisplay] = React.useState("none");

  return (
    <Layout display={display}>
      <Category name="Кухни" mainText={mainText} block="context" photos={photos}/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
