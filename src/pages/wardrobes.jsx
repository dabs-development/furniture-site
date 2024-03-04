import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText ="Современные гардеробные помещения представляют собой пространства роскошного уюта и функциональной организации. Они обычно имеют стильный дизайн, отличающийся элегантными линиями и высококачественными отделками. Благодаря передовым технологиям и инновационным решениям, современные гардеробные могут быть полностью адаптированы к потребностям владельца, предлагая широкий спектр модульных элементов для хранения одежды, обуви, аксессуаров и других вещей."

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
      <Category name="Гардеробные" mainText={mainText}/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
