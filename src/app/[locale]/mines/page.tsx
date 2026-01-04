import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { LandingNavs } from "~/components/layout/landing-navs";
import { Button } from "~/components/ui/button";

const MinesPage = async ({ params }: PageProps<"/[locale]/mines">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("mines");

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
        <LeftPanel>
          <LeftPanelHeader>
            <h2 className="font-title text-[60px] md:text-[120px] leading-none">
              {t("title")}
            </h2>
            <h1 className="font-title text-[60px] md:text-[120px] text-primary leading-none">
              {t("subtitle")}
            </h1>
            <h3 className="font-title text-xl text-primary leading-none mt-3">
              {t("subtitle2")}
            </h3>
          </LeftPanelHeader>
          <LeftPanelContent>
            <div className="text-foreground/80 text-justify font-extralight">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
              <p>{t("text3")}</p>
              <p>{t("text4")}</p>
              <p>{t("text5")}</p>
              <p>{t("text6")}</p>
              <p>{t("text7")}</p>
              <p>{t("text8")}</p>
              <p>{t("text9")}</p>
              <p>{t("text10")}</p>
              <p>{t("text11")}</p>
              <p>{t("text12")}</p>
              <p>{t("text13")}</p>
            </div>
            <Image
              src={"/images/miner3.png"}
              alt="miner"
              width={1200}
              height={800}
              className="mx-auto w-1/3"
            />

            <div className="flex gap-4 absolute bottom-10 start-50">
              <Button className="font-title rtl:font-text">{t("cta")}</Button>
              <Button size={"icon"}>
                <ArrowUpRightIcon className="size-4 fill-primary-foreground" />
              </Button>
            </div>
          </LeftPanelContent>
        </LeftPanel>
      </div>

      <div className="fixed left-0 right-0 bottom-0 h-[120px] z-20 bg-linear-to-t from-black/75 via-black/60 to-transparent" />

      <LandingNavs />
    </>
  );
};

export default MinesPage;
