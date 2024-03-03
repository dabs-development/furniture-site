import * as React from "react";

import Category from "../components/Category";
import Layout from "../components/layout";

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
      <Category name="Гардеробные"/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
