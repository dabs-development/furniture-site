import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { InputMask } from "@react-input/mask";

const MainInfo = () => {
  const { values, handleChange } = useFormikContext();

  return (
    <>
      <FormControl>
        <FormLabel>Как к вам обращатся?</FormLabel>
        <Input
          name="name"
          value={values.name}
          placeholder="Иванов Иван"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Номер для обратной связи</FormLabel>
        <Input
          as={InputMask}
          name="phone"
          value={values.phone}
          mask="+7 (___) ___-__-__"
          placeholder="+ 7 (999) 999-99-99"
          replacement={{ _: /\d/ }}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};

export default MainInfo;
