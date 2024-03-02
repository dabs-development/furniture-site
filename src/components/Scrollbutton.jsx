import * as React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { tabs } from "../model/main";


const Scrollbutton = ({isvisible,onClick}) => {
  return (
    <Box height={70} width={70} position="fixed" zIndex={100} bottom={100} left={10} visibility={isvisible} onClick={onClick}>
        <Button colorScheme='teal' size='lg' borderRadius="50%" height={70} width={70} bg="#79B52D" fontSize="3rem" fontWeight="bold">
        &#8593;
  </Button>
    </Box>
  );
};

export default Scrollbutton;
