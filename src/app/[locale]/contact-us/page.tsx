import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { ConnectUsList } from "./connect-us-list";

const ConnectUsPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("connectUs");

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
            <h2 className="font-title text-[60px] md:text-[110px] leading-none">
              {t("title")}
            </h2>
            <h1 className="font-title text-[60px] md:text-[70px] leading-none">
              {t("subtitle")}
            </h1>
          </LeftPanelHeader>
          <LeftPanelContent>
            <ConnectUsList />
            <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
            <div className="h-[120px]"></div>
          </LeftPanelContent>
        </LeftPanel>
      </PanelContainer>
    </>
  );
};

export default ConnectUsPage;
