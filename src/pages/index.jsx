import * as React from "react";

import App from "../components/App";
import Layout from "../components/layout";

const IndexPage = ({location}) => {

  const [dispaly, setDisplay] = React.useState("content");

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
      <App />
    </Layout>
  )
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
