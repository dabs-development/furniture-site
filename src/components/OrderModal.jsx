import React, { useMemo } from "react";
import {
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";

const OrderModal = ({ initialRef, closeModal, page }) => {
  const { values, submitForm, handleChange } = useFormikContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const renderFirstInputs = useMemo(() => {
    return (
      <>
        <FormControl>
          <FormLabel>Как к вам обращатся?</FormLabel>
          <Input
            id="name"
            value={values.name}
            placeholder="First name"
            ref={initialRef}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Номер для обратной связи</FormLabel>
          <Input
            id="phone"
            value={values.phone}
            type="tel"
            placeholder="+ 7 999 999 99 99"
            onChange={handleChange}
          />
        </FormControl>
      </>
    );
  }, [values, initialRef]);

  const renderSecondInputs = useMemo(() => {
    return (
      <FormControl>
        <FormLabel>Размер</FormLabel>
        <Input
          id="size"
          value={values.size}
          ref={initialRef}
          placeholder="Size"
          onChange={handleChange}
        />
      </FormControl>
    );
  }, [values, handleChange, initialRef]);

  const renderCurrentModal = useMemo(() => {
    switch (page) {
      case 0:
        return renderFirstInputs;

      case 1:
        return renderSecondInputs;

      default:
        return null;
    }
  }, [page, renderFirstInputs, renderSecondInputs]);

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalBody>{renderCurrentModal}</ModalBody>
        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </FormControl>
  );
};

export default OrderModal;
