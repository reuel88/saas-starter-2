import { ReactNode } from "react";
import { Banner, Footer, Header, PrivacyNotice } from "@repo/ui/components";

// async function getData() {
//   const res = await fetch("https://dummyjson.com/users/1");
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

type LayoutProps = Readonly<{
  children: ReactNode;
  params: { locale: string };
}>;

export default async function Layout({ children }: LayoutProps) {
  // const data = await getData().then((res) => {
  //   return {
  //     firstName: res.firstName,
  //     lastName: res.lastName,
  //     email: res.email,
  //     avatar: {
  //       imageSrc: res.image,
  //     },
  //   };
  // });

  return (
    <>
      <Banner cookieName="banner">Hello</Banner>
      <Header user={null} />
      {children}
      <Footer />
      <PrivacyNotice />
    </>
  );
}
