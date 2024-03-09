"use server";

import initTranslations from "@repo/i18n/i18n";
import { Container, Wrapper } from "@repo/ui/components";

// async function getProducts() {
//   const res = await fetch("https://dummyjson.com/products?limit=9");
//   // The return value is *not* serialized
//   // You can return DateFormat, Map, Set, etc.
//
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//
//   return res.json();
// }

const i18nNamespaces = ["about", "test"];

type AboutPageProps = {
  params: { locale: string };
};

export default async function AboutPage({
  params: { locale },
}: AboutPageProps) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <Wrapper as="main">
        <Container>
          <h1>{t("about_header")}</h1>
        </Container>
      </Wrapper>
    </>
  );
}
