import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
        fontFamily: "Inter Variable",
      },
    },
  },
});

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Contacts />
      <Footer />
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
