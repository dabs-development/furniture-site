import * as React from "react";

import App from "../components/App";
import Layout from "../components/layout";

const IndexPage = () => {

  return (
    <Layout>
      <App/>
    </Layout>
  )
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
