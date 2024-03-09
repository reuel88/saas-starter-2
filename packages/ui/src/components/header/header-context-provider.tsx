"use client";

import { createContext, ReactNode, useContext } from "react";
import { User } from "../../types/user";

type HeaderContextType = {
  user: User | null;
};

export const HeaderContext = createContext<HeaderContextType>({
  user: null,
});

export const useHeader = () => {
  return useContext(HeaderContext);
};

type HeaderProviderProps = {
  children: ReactNode;
  user: User | null;
};

export const HeaderContextProvider = ({
  children,
  user,
}: HeaderProviderProps) => {
  return (
    <HeaderContext.Provider value={{ user }}>{children}</HeaderContext.Provider>
  );
};
