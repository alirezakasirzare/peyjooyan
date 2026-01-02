import { useTranslations } from "next-intl";
import Image from "next/image";
import { LandingNavs } from "~/components/layout/landing-navs";

const AboutUsPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Image
        src={"/images/about.png"}
        alt="about"
        width={1200}
        height={800}
        className="w-full h-full object-cover fixed top-0 left-0"
      />

      <div className="fixed left-0 top-0 bg-linear-to-l from-black to-black/0 w-full h-full bottom-22"></div>

      <div className="relative z-10 container">
        <div className="w-160 max-w-full pt-6 md:p-10">
          <h2 className="font-title text-[60px] md:text-[120px] leading-none">
            {t("title")}
          </h2>
          <h1 className="font-title text-[60px] md:text-[120px] text-primary leading-none">
            {t("subtitle")}
          </h1>
          <h3 className="font-title text-xl text-primary leading-none mt-3">
            {t("subtitle2")}
          </h3>
          <div className="mt-6 text-foreground/80 text-justify font-extralight">
            <p>{t("text1")}</p>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
            <p>{t("text4")}</p>
            <p>{t("text5")}</p>
          </div>

          <Image
            src={"/images/miner2.png"}
            alt="miner"
            width={1200}
            height={800}
            className="mx-auto w-2/3"
          />
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 h-[120px] z-20 bg-linear-to-t from-black/75 via-black/60 to-transparent" />

      <LandingNavs />
    </>
  );
};

export default AboutUsPage;
