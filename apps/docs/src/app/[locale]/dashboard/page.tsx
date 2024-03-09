import initTranslations from "@repo/i18n/i18n";
import { Container, Wrapper } from "@repo/ui/components";

type DashboardPageProps = {
  params: { locale: string };
};
export default async function DashboardPage({
  params: { locale },
}: DashboardPageProps) {
  const { t } = await initTranslations(locale);

  return (
    <Wrapper as="main">
      <Container>
        <h1>{t("dashboard_title")}</h1>
        <p>The central hub where users land after logging in.</p>
        <p>
          Displays an overview of relevant information, such as recent activity,
          key metrics, and personalized widgets.
        </p>
        <p>Users can navigate to other sections from here.</p>
      </Container>
    </Wrapper>
  );
}
