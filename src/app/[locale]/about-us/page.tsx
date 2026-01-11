import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";

const AboutUsPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("about");

  return (
    <>
      <Image
        src={"/images/about.png"}
        alt="about"
        width={1200}
        height={800}
        className="w-full h-full object-cover fixed top-0 left-0"
      />

      <div className="fixed left-0 top-0 bg-linear-to-r from-black to-black/0 w-full h-full bottom-22 -z-10"></div>

      <PanelContainer>
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
            </div>

            <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />

            <Image
              src={"/images/miner2.png"}
              alt="miner"
              width={1200}
              height={800}
              className="mx-auto w-2/3 relative"
            />
          </LeftPanelContent>
        </LeftPanel>
      </PanelContainer>
    </>
  );
};

export default AboutUsPage;
