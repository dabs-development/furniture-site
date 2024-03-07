import React from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";

import { CATEGORIES } from "../../model/main";

const Categories = () => {
  const { values, handleChange } = useFormikContext();

  return (
    <FormControl>
      <FormLabel>Выберите категорию</FormLabel>
      <CheckboxGroup>
        <Stack>
          {CATEGORIES.map((category) => {
            return (
              <Checkbox
                key={category.id}
                isChecked={values.categories[category.id]}
                name={`categories.${category.id}`}
                onChange={handleChange}
              >
                {category.name}
              </Checkbox>
            );
          })}
        </Stack>
      </CheckboxGroup>
    </FormControl>
  );
};

export default Categories;
