"use server";

import initTranslations from "@repo/i18n/i18n";
import { TranslationContextProvider } from "@repo/i18n/contexts";
import { BackButton, LanguageChanger } from "@/components";

const i18nNamespaces = ["about", "test"];

type AboutPageProps = {
  params: { locale: string };
};

export default async function AboutPage({
  params: { locale },
}: AboutPageProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationContextProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <main>
        <h1>{t("about_header")}</h1>
        <BackButton />
        <LanguageChanger />
      </main>
    </TranslationContextProvider>
  );
}
