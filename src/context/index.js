import { createContext } from "react";

const defaultContextValue = {
  visibleClass: "",
  onModalOpen: () => null,
};

const AppContext = createContext(defaultContextValue);

export default AppContext;
