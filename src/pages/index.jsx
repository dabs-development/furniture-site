import * as React from "react";

import App from "../components/App";
import Layout from "../components/layout";

const IndexPage = () => {
  const [display] = React.useState("context");

  return (
    <Layout display={display}>
      <App />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Главная</title>;
