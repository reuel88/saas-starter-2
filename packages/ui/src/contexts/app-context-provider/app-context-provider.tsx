import { ReactNode } from "react";
import { ThemeContextProvider } from "../theme-context-provider";
import { ToasterWrapper } from "../../components";

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
      <ToasterWrapper>{children}</ToasterWrapper>
    </ThemeContextProvider>
  );
};
