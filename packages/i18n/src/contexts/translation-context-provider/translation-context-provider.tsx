"use client";

import { Resource, createInstance } from "i18next";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import initTranslations from "../../i18n";

type TranslationContextProviderProps = {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export const TranslationContextProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: TranslationContextProviderProps) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
