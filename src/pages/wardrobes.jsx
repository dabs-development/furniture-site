import React from "react";
import Layout from "../components/layout";
import Wardrobes from "../components/wardrobes/Wardrobes";

const WardrobesPage = () => {
  return (
    <Layout display="none">
      <Wardrobes />
    </Layout>
  );
};

export default WardrobesPage;

export const Head = () => <title>Гардеробные</title>;
