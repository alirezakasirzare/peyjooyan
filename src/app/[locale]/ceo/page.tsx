import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { CeoPopupSection } from "./ceo-popup-section";
import { CeoCta } from "./ceo-cta";
import { PageContainer } from "~/components/common/page-container";

const SocialMedia = () => {
  const items = [
    {
      link: "https://google.com",
      iconSrc: "/images/media/email.png",
    },
    {
      link: "https://google.com",
      iconSrc: "/images/media/linkedin.png",
    },
  ];

  return (
    <ul className="flex gap-2">
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank">
            <Image
              width={100}
              height={100}
              alt="social media"
              src={item.iconSrc}
              className="w-8"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

const CeoPage = async ({ params }: PageProps<"/[locale]/ceo">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("ceo");

  return (
    <>
      <CeoCta />

      <PageContainer>
        <PanelContainer>
          <LeftPanel className="gap-32 md:gap-0 static z-auto">
            <LeftPanelHeader className="relative z-51">
              <h2 className="font-title text-[60px] md:text-[100px] leading-none">
                {t("title")}
              </h2>
              <h1 className="font-title text-lg md:text-[60px] rtl:md:text-[30px] text-primary leading-none -mt-1 md:-mt-3 rtl:mt-2">
                {t("subtitle")}
              </h1>
              <h3 className="font-title text-lg md:text-xl leading-none rtl:mt-2">
                2012 | 2020
              </h3>
              <div className="mt-2">
                <SocialMedia />
              </div>
            </LeftPanelHeader>
            <LeftPanelContent className="relative z-50">
              <div className="text-foreground/60 text-justify font-extralight flex flex-col gap-3">
                <p>{t("text1")}</p>
                <p>{t("text2")}</p>
                <p>{t("text3")}</p>
                <p>{t("text4")}</p>
              </div>

              <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
              <div className="h-[30px] md:h-[120px]"></div>
            </LeftPanelContent>
          </LeftPanel>
          <CeoPopupSection />
        </PanelContainer>
      </PageContainer>
    </>
  );
};

export default CeoPage;
