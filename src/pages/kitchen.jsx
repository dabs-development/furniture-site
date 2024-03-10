import React from "react";
import Layout from "../components/layout";
import Kitchen from "../components/kitchen/Kitchen";

const KitchenPage = () => {
  return (
    <Layout display="none">
      <Kitchen />
    </Layout>
  );
};

export default KitchenPage;

export const Head = () => <title>Кухни</title>;
