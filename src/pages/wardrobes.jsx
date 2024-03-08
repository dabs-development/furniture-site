import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const mainText =
  "Современные гардеробные помещения представляют собой пространства роскошного уюта и функциональной организации. Они обычно имеют стильный дизайн, отличающийся элегантными линиями и высококачественными отделками. Благодаря передовым технологиям и инновационным решениям, современные гардеробные могут быть полностью адаптированы к потребностям владельца, предлагая широкий спектр модульных элементов для хранения одежды, обуви, аксессуаров и других вещей.";

const IndexPage = () => {
  const [display] = React.useState("none");

  return (
    <Layout display={display}>
      <Category name="Гардеробные" mainText={mainText} block="none" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Гардеробные</title>;
