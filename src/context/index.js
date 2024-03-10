import { createContext } from "react";

const defaultContextValue = {
  visibleClass: "",
  onModalOpen: () => null,
  onImageModalOpen: () => null,
};

const AppContext = createContext(defaultContextValue);

export default AppContext;
