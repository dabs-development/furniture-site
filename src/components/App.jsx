import React from "react";

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

const App = () => {
  return (
    <>
      <Reviews />
      <Lan />
      <Examples />
      <Advantages />
      <Stock />
      <Individual />
      <Stages />
      <Buyer />
      <Contacts />
      <Comment />
    </>
  );
};

export default App;
