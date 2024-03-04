import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText ="Современные прихожие восхищают своей функциональностью и стильным дизайном. Они представляют собой идеальное сочетание практичности и эстетики, создавая приветливое и уютное пространство для встречи гостей и хранения повседневных предметов. Благодаря инновационным решениям в дизайне, современные прихожие предлагают широкий выбор многофункциональных элементов, таких как вешалки, шкафчики для обуви, зеркала, крючки и даже удобные сиденья. Это позволяет эффективно использовать пространство и обеспечивает комфортное хранение различных предметов, от верхней одежды до ключей и сумок."

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
      <Category name="Прихожие" mainText={mainText}/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
