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
import { ContactUsPopupSection } from "./contact-us-popup-section";

const ConnectUsPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("connectUs");

  return (
    <>
      <div>
        <Image
          src={"/images/contact-us.gif"}
          alt="contact-us"
          width={1200}
          height={800}
          className="absolute top-0 -right-40 w-200 h-full object-cover object-top-left hidden md:block"
        />

        <Image
          src={"/images/contact-us.gif"}
          alt="contact-us"
          width={1200}
          height={800}
          className="absolute -top-10 -right-20 h-80 w-100 object-cover object-top-left md:hidden"
        />

        <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-1/2 pointer-events-none" />
        <div className="fixed right-0 top-0 bg-linear-to-r from-black to-black/0 w-160 h-full"></div>
      </div>

      <PanelContainer>
        <LeftPanel>
          <LeftPanelHeader>
            <h2 className="font-title text-[60px] md:text-[110px] leading-none">
              {t("title")}
            </h2>
            <h1 className="font-title text-[20px] md:text-[70px] leading-none">
              {t("subtitle")}
            </h1>
          </LeftPanelHeader>
          <LeftPanelContent>
            <div className="pt-28 md:pt-0">
              <ConnectUsList />
              <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
              <div className="h-[120px]"></div>
            </div>
          </LeftPanelContent>
        </LeftPanel>

        <ContactUsPopupSection />
      </PanelContainer>
    </>
  );
};

export default ConnectUsPage;
