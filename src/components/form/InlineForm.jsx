import React from "react";
import { Text, Button, FormControl } from "@chakra-ui/react";
import { useFormikContext } from "formik";

import MainInfo from "./MainInfo";

const InlineForm = () => {
  const { values, submitForm } = useFormikContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <Text fontSize="1.5rem" paddingBottom={5}>
        Оставьте данные для обратной связи
      </Text>
      <MainInfo />
      <Button
        type="submit"
        colorScheme="blue"
        mt="1rem"
        isDisabled={!values.name || !values.phone}
      >
        Отправить
      </Button>
    </FormControl>
  );
};

export default InlineForm;
