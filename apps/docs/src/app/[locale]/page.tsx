import { ThemeToggle, TurboCard, TurboCode } from "@repo/ui/components";
import Image from "next/image";
import { ClientExample } from "@repo/i18n/components";
import { TranslationContextProvider } from "@repo/i18n/contexts";
import initTranslations from "@repo/i18n/i18n";
import Link from "next/link";
import { LanguageChanger } from "@/components";

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

type PageProps = {
  params: { locale: string };
};

const i18nNamespaces = ["home"];
export default async function Page({ params: { locale } }: PageProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationContextProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm">
          <p className="flex w-auto justify-center rounded-xl border border-neutral-800 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl lg:bg-gray-200 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
            examples/basic&nbsp;
            <TurboCode className="font-mono font-bold">docs</TurboCode>
          </p>

          <ThemeToggle />

          <div className="flex items-end justify-center">
            <a
              className="pointer-events-auto flex gap-2"
              href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
              rel="noopener noreferrer"
              target="_blank"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div>
          <h1>{t("header")}</h1>
          <ClientExample />
          <Link href={`/about`}>{t("page2")}</Link>
          <LanguageChanger />
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {LINKS.map(({ title, href, description }) => (
            <TurboCard href={href} key={title} title={title}>
              {description}
            </TurboCard>
          ))}
        </div>
      </main>
    </TranslationContextProvider>
  );
}
