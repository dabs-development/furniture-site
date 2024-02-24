import * as React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
