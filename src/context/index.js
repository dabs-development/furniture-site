import { createContext } from "react";

const defaultContextValue = {
  visibleClass: "",
  onOpen: () => null,
};

const AppContext = createContext(defaultContextValue);

export default AppContext;
