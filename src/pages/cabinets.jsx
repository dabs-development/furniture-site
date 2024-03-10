import React from "react";
import Layout from "../components/layout";
import Cabinets from "../components/cabinets/Cabinets";

const CabinetsPage = () => {
  return (
    <Layout display="none">
      <Cabinets />
    </Layout>
  );
};

export default CabinetsPage;

export const Head = () => <title>Шкафы</title>;
