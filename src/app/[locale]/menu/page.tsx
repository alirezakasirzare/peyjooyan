import Image from "next/image";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LandingMenu } from "~/components/layout/landing-menu";
import { InitSection } from "~/components/sections/init-section";

const MenuPage = async ({ params }: PageProps<"/[locale]/menu">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <InitSection />

      <Image
        src={"/images/miner.png"}
        alt="hero"
        width={1200}
        height={800}
        className="absolute left-0 bottom-0 w-[55vw] md:w-[28vw] z-50"
      />

      <LandingMenu />
    </>
  );
};

export default MenuPage;
