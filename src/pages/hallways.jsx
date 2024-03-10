import React from "react";
import Layout from "../components/layout";
import Hallways from "../components/hallways/Hallways";

const HallwaysPage = () => {
  return (
    <Layout display="none">
      <Hallways />
    </Layout>
  );
};

export default HallwaysPage;

export const Head = () => <title>Прихожие</title>;
