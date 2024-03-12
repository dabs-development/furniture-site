import React, { useContext, useMemo } from "react";
import {
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  Spinner,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";

import MainInfo from "./form/MainInfo";
import Categories from "./form/Categories";
import AppContext from "../context";

const OrderModal = ({ type, page, closeModal }) => {
  const { values, submitForm } = useFormikContext();
  const { isLoading } = useContext(AppContext);

  const isSimple = useMemo(() => {
    return type === "simple";
  }, [type]);

  const renderCurrentModal = useMemo(() => {
    if (isSimple) {
      return <MainInfo />;
    }

    switch (page) {
      case 0:
        return <Categories />;

      case 1:
        return <MainInfo />;

      default:
        return null;
    }
  }, [page, isSimple]);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const isMainValid = useMemo(() => {
    return !values.name || !values.phone;
  }, [values]);

  const isSubmitDisabled = useMemo(() => {
    if (isSimple) {
      return isMainValid;
    }

    if (page === 0) {
      return Object.values(values.categories).every((value) => !value);
    }

    if (page === 1) {
      return isMainValid;
    }

    return false;
  }, [values, page, isMainValid, isSimple]);

  const btnValue = useMemo(() => {
    if (isSimple) {
      return "Отправить";
    }

    return page === 1 ? "Отправить" : "Далее";
  }, [isSimple, page]);

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <ModalContent>
        <ModalHeader>Оставьте заявку</ModalHeader>
        <ModalBody>{renderCurrentModal}</ModalBody>
        <ModalFooter>
          {isLoading ? (
            <Spinner mr="2rem" />
          ) : (
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              isDisabled={isSubmitDisabled}
            >
              {btnValue}
            </Button>
          )}
          <Button onClick={closeModal}>Отменить</Button>
        </ModalFooter>
      </ModalContent>
    </FormControl>
  );
};

export default OrderModal;
