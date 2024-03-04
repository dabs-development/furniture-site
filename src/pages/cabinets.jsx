import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText ="Современные шкафы представляют собой элегантное сочетание функциональности и стиля. Их четкие линии и изысканные отделения создают впечатляющий внешний вид, который подчеркивает современный интерьер. Материалы, используемые в производстве, отличаются прочностью и долговечностью, добавляя шкафам утонченный шарм. Современные шкафы очаровывают своей функциональностью: они предлагают широкий выбор встроенных элементов для хранения, включая выдвижные ящики, вешалки, полки и даже встроенную подсветку. В результате создается визуально привлекательное и удобное пространство для хранения одежды, обуви и других предметов."

const IndexPage = ({location}) => {

    const [dispaly, setDisplay] = React.useState("none");

    React.useEffect(() => {
      console.log(dispaly)
      if(location.pathname==="/"){
        setDisplay("content")
      }else{
        setDisplay("none")
      }
    }, [dispaly]);
  

  return (
    <Layout dispaly={dispaly}>
      <Category name="Шкафы" mainText={mainText}/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
