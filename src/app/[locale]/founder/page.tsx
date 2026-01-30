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
import { FounderCta } from "./founder-cta";
import { FounderPopupSection } from "./founder-popup-section";

const FounderPage = async ({ params }: PageProps<"/[locale]/founder">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("founder");

  return (
    <>
      <div>
        <Image
          src={"/images/founder.gif"}
          alt="founder"
          width={1200}
          height={800}
          className="absolute top-0 md:top-auto md:bottom-0 right-0 w-80 md:w-160"
        />
        <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-1/2 pointer-events-none" />
      </div>

      <div className="fixed right-0 top-0 bg-linear-to-r from-black to-black/0 w-160 h-full"></div>

      <PanelContainer>
        <LeftPanel className="gap-32 md:gap-0">
          <LeftPanelHeader>
            <h2 className="font-title text-[60px] md:text-[90px] leading-none">
              {t("title")}
            </h2>
            <h1 className="font-title text-lg md:text-[60px] rtl:md:text-[30px] text-primary leading-none">
              {t("subtitle")}
            </h1>
            <h3 className="font-title text-lg md:text-xl leading-none mt-3">
              2012 | 2020
            </h3>
            <div className="flex gap-4 mt-5">
              <FounderCta />
              <Button size={"icon"} variant={"outline"}>
                <ArrowUpRightIcon className="size-4 fill-primary" />
              </Button>
            </div>
          </LeftPanelHeader>
          <LeftPanelContent>
            <div className="text-foreground/80 text-justify font-extralight">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
              <p>{t("text3")}</p>
              <p>{t("text4")}</p>
            </div>

            <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
            <div className="h-[120px]"></div>
          </LeftPanelContent>
        </LeftPanel>

        <FounderPopupSection />
      </PanelContainer>
    </>
  );
};

export default FounderPage;
