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

      <div className="absolute left-0 top-0 p-10 w-160">
        <h2 className="font-title text-[120px] leading-none">{t("title")}</h2>
        <h1 className="font-title text-[120px] text-primary leading-none">
          {t("subtitle")}
        </h1>
        <h3 className="font-title text-xl text-primary leading-none">
          {t("subtitle2")}
        </h3>
        <div className="mt-6">
          <p className="text-foreground/80 text-justify">{t("text1")}</p>
          <p className="text-foreground/80 text-justify">{t("text2")}</p>
          <p className="text-foreground/80 text-justify">{t("text3")}</p>
          <p className="text-foreground/80 text-justify">{t("text4")}</p>
          <p className="text-foreground/80 text-justify">{t("text5")}</p>
        </div>
      </div>

      <LandingNavs />
    </>
  );
};

export default AboutUsPage;
