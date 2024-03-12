import { createContext } from "react";

const defaultContextValue = {
  visibleClass: "",
  isLoading: false,
  onModalOpen: () => null,
  onImageModalOpen: () => null,
};

const AppContext = createContext(defaultContextValue);

export default AppContext;
