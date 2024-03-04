import { ReactNode } from "react";
import { ThemeContextProvider } from "../theme-context-provider";

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <ThemeContextProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeContextProvider>
  );
};
