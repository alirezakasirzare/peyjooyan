import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LandingNavs } from "~/components/layout/landing-navs";
import { InitSection } from "~/components/sections/init-section";

const HomePage = async ({ params }: PageProps<"/[locale]">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <InitSection />
      <LandingNavs />
    </>
  );
};

export default HomePage;
