import React, { useContext } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

import fon3 from "../images/fon3.jpg";
import fon4 from "../images/fon4.webp";
import fon5 from "../images/fon5.webp";
import AppContext from "../context";

const Stock = () => {
  const context = useContext(AppContext);

  return (
    <Flex bg="#f1f3f9" flexDirection="column" id="stock">
      <Text margin="auto" fontSize="3rem" fontWeight="bold">
        Наши акции
      </Text>
      <Flex
        margin="auto"
        flexDirection={{ xl: "row", lg: "column", md: "column", sm: "column" }}
        color="#fff"
      >
        <Flex
          width={{ xl: 400, lg: 400, md: 400, sm: 300 }}
          height={200}
          position="relative"
          backgroundImage={fon3}
          backgroundPosition="center"
          marginTop={10}
          marginRight={{ xl: "10", lg: "0", md: "0", sm: "0" }}
          borderEndRadius={5}
          boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);"
        >
          <Flex
            width={{ xl: "72%", lg: "72%", md: "72%", sm: "100%" }}
            bg="#303d4d"
            opacity="0.5"
            borderEndRadius={5}
          >
            <br />
          </Flex>
          <Box
            position="absolute"
            border="2px solid #ffd700"
            top={5}
            left={2.5}
          >
            <Box padding={5}>
              <Text fontWeight="bold" fontSize="1.1rem">
                ПРИ ПОКУПКЕ
                <br />
                КУХНИ
              </Text>
              <Text fontWeight="bold" color="#ffd700">
                {" "}
                ДАРИМ смеситель и мойку
              </Text>
              <Text>
                из <span style={{ color: "#ffd700" }}>искусственного</span>{" "}
                камня
              </Text>
            </Box>
          </Box>
          <Flex>
            <br />
          </Flex>
        </Flex>
        <Flex
          width={{ xl: 400, lg: 400, md: 400, sm: 300 }}
          height={200}
          position="relative"
          backgroundImage={fon4}
          backgroundPosition="center"
          marginTop={10}
          borderEndRadius={5}
          boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);"
        >
          <Flex
            width={{ xl: "72%", lg: "72%", md: "72%", sm: "100%" }}
            bg="#303d4d"
            opacity="0.5"
            borderEndRadius={5}
          >
            <br />
          </Flex>
          <Box
            position="absolute"
            border="2px solid #ffd700"
            top={5}
            left={2.5}
          >
            <Box padding={5} paddingRight="105px">
              <Text fontWeight="bold" fontSize="1.1rem">
                ПРИ ПОКУПКЕ,
                <br />
                <span style={{ color: "#ffd700" }}>ШКАФА</span>
              </Text>
              <Text>КОМОД</Text>
              <Text color="#ffd700" fontWeight="bold">
                В ПОДАРОК
              </Text>
            </Box>
          </Box>
          <Flex>
            <br />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        display="none"
        width={{ xl: 400, lg: 400, md: 400, sm: 300 }}
        height={200}
        position="relative"
        backgroundImage={fon5}
        backgroundPosition="center"
        margin="auto"
        marginTop={10}
        borderEndRadius={5}
        boxShadow="0px 0px 15px 4px rgba(0,0,0,0.3);"
      >
        <Flex width="68%" bg="#303d4d" opacity="0.5" borderEndRadius={5}>
          <br />
        </Flex>
        <Box
          position="absolute"
          border="2px solid #ffd700"
          top={5}
          left={2.5}
          color="#fff"
        >
          <Box padding={5}>
            <Text fontWeight="bold" fontSize="1.1rem">
              НОВОСЕЛАМ,
              <br />
              ПЕНСИОНЕРАМ,
              <br />
              ВОЕННОСЛУЖАЩИМ
            </Text>
            <Text color="#ffd700" fontWeight="bold">
              СКИДКИ ДО 15%
            </Text>
            <Text color="#ffd700">На всю корпусную мебель</Text>
          </Box>
        </Box>
        <Flex>
          <br />
        </Flex>
      </Flex>
      <Button
        bg="#ffd700"
        colorScheme="teal"
        onClick={context.onModalOpen("simple")}
        width={300}
        margin="auto"
        marginTop={5}
        marginBottom={5}
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
      >
        УЗНАТЬ БОЛЬШЕ
      </Button>
    </Flex>
  );
};

export default Stock;
