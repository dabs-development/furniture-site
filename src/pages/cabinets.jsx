import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

import Logo from "../images/shkaf(1).jpg";

const photos = [
  {src: "../images/shkaf(1).jpg"},
  {src: "../images/shkaf(2).jpg"},
  {src: "../images/shkaf(3).jpg"},
  {src: "../images/shkaf(4).jpg"},
  {src: "../images/shkaf(5).jpg"},
  {src: "../images/shkaf(6).jpg"},
  {src: "../images/shkaf(7).jpg"},
  {src: "../images/shkaf(8).jpg"},
]

const mainText =
  "Современные шкафы представляют собой элегантное сочетание функциональности и стиля. Их четкие линии и изысканные отделения создают впечатляющий внешний вид, который подчеркивает современный интерьер. Материалы, используемые в производстве, отличаются прочностью и долговечностью, добавляя шкафам утонченный шарм. Современные шкафы очаровывают своей функциональностью: они предлагают широкий выбор встроенных элементов для хранения, включая выдвижные ящики, вешалки, полки и даже встроенную подсветку. В результате создается визуально привлекательное и удобное пространство для хранения одежды, обуви и других предметов.";

const IndexPage = ({ location }) => {
  const [display, setDisplay] = React.useState("none");

  return (
    <Layout display={display}>
      <Category name="Шкафы" mainText={mainText} block="context" photos={photos}/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
