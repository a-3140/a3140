import { createContext, useContext } from "react";

export type LoadingScreenContextInterface = {
  hasLoaded: boolean;
  setHasLoaded: (v: boolean) => void;
};

export const loadingScreenContext =
  createContext<LoadingScreenContextInterface>({
    hasLoaded: false,
    setHasLoaded: () => {},
  });

export const useLoadingScreenContext = () => useContext(loadingScreenContext);
