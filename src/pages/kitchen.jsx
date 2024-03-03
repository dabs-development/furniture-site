import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Category />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
