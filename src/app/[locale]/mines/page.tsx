import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { Button } from "~/components/ui/button";
import { ReadMoreBtn } from "./read-more-btn";
import { MinesPopupSection } from "./mines-popup-section";
import { ArrowIcon } from "~/components/sections/arrow-icon";
import { PageContainer } from "~/components/common/page-container";

const MinesPage = async ({ params }: PageProps<"/[locale]/mines">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("mines");

  return (
    <>
      <Image
        src={"/images/mines.png"}
        alt="about"
        width={1200}
        height={800}
        className="w-full hidden md:block md:w-[70%] h-80 md:h-full object-cover fixed top-0 right-0 rtl:left-0 rtl:right-auto -z-10"
      />

      <div className="hidden md:block fixed -right-[200px] rtl:right-auto rtl:-left-[200px] top-0 bg-linear-to-r rtl:bg-linear-to-l from-black via-black/80 to-black/0 w-[calc(70%+200px)] h-full bottom-22 -z-10"></div>
      {/* <div className="md:hidden fixed left-0 -top-20 bg-linear-to-t from-black to-black/0 w-full h-100 bottom-22 -z-10"></div> */}

      <Image
        src={"/images/star.png"}
        alt="star"
        width={1200}
        height={800}
        className="w-full h-2/3 md:h-[100dvh] fixed top-0 left-0 object-contain"
      />

      <PageContainer>
        <PanelContainer>
          <LeftPanel>
            <LeftPanelHeader>
              <h2 className="font-title text-[60px] md:text-[110px] leading-none">
                {t("title")}
              </h2>
              <h1 className="font-title text-[60px] md:text-[120px] text-primary leading-none -mt-1 md:-mt-3 rtl:-mt-3 rtl:md:-mt-6">
                {t("subtitle")}
              </h1>
              <h3 className="font-title md:text-[30px] text-primary leading-none rtl:mt-3">
                {t("subtitle2")}
              </h3>
            </LeftPanelHeader>
            <LeftPanelContent>
              <div className="text-foreground/60 text-justify font-extralight flex flex-col gap-3">
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

              <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />

              <div className="flex gap-4 absolute bottom-10 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
                <ReadMoreBtn />
                <Button size={"icon"}>
                  <ArrowIcon />
                </Button>
              </div>
            </LeftPanelContent>
          </LeftPanel>

          <MinesPopupSection />
        </PanelContainer>
      </PageContainer>
    </>
  );
};

export default MinesPage;
