import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { DesktopSteps } from "./desktop-steps";
import { MineralsPopupSection } from "./minerals-popup-section";
import { MobileSteps } from "./mobile-steps";

const MineralsPage = async ({ params }: PageProps<"/[locale]/minerals">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("minerals");

  return (
    <>
      <Image
        src={"/images/minerals.png"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-1/3 md:h-screen fixed top-0 left-0 object-cover"
      />

      <div className="fixed left-0 top-0 bg-linear-to-t from-black to-black/0 w-full h-full bottom-22 z-10 hidden md:block"></div>

      <div className="fixed top-0 left-0 bg-linear-to-t from-black to-black/0 w-full h-[calc(33.33333333%)] bottom-0 md:hidden"></div>

      <Image
        src={"/images/star.png"}
        alt="star"
        width={1200}
        height={800}
        className="w-full h-2/3 md:h-screen fixed top-0 left-0 object-contain"
      />

      <div className="p-6 md:pt-10 pb-10 md:pb-0 flex flex-col max-h-screen relative z-50">
        <h2 className="font-title text-[60px] md:text-[60px] leading-none">
          {t("title")}
        </h2>
        <h1 className="font-title text-[60px] md:text-[60px] text-primary leading-none -mt-1 md:-mt-2 rtl:-mt-3 rtl:md:-mt-5">
          {t("subtitle")}
        </h1>
        <h3 className="font-title text-lg text-primary leading-none rtl:mt-3">
          {t("subtitle2")}
        </h3>
        <div className="md:px-20 mt-10 md:mt-0">
          <DesktopSteps />
          <MobileSteps />
        </div>
      </div>

      <MineralsPopupSection />
    </>
  );
};

export default MineralsPage;
