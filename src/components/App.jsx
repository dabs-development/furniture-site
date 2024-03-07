import React, { useContext } from "react";

import Contacts from "./Contacts";
import Reviews from "./Reviews";
import Individual from "./Individual";
import Examples from "./Examples";
import Stages from "./Stages";
import Lan from "./Lan";
import Advantages from "./Advantages";
import Stock from "./Stock";
import Buyer from "./Buyer";
import Comment from "./Comment";

import AppContext from "../context";

const App = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Reviews />
      <Lan openModal={context.onModalOpen} />
      <Examples />
      <Advantages />
      <Stock openModal={context.onModalOpen} />
      <Individual />
      <Stages />
      <Buyer />
      <Contacts />
      <Comment />
    </>
  );
};

export default App;
