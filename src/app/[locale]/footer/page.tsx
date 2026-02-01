import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { ContactList } from "./contact-list";

const FooterPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("footer");

  return (
    <>
      <div className="hidden md:block">
        <Image
          src={"/images/footer.png"}
          alt="footer"
          width={1200}
          height={800}
          className="w-100 h-full object-cover fixed bottom-0 right-0 rtl:right-auto rtl:left-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-full pointer-events-none" />
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
            <ContactList />
            <div className="relative">
              <Image
                src={"/images/footer.png"}
                alt="footer"
                width={1200}
                height={800}
                className="w-100 h-full object-cover"
              />
              <Image
                src={"/images/miner9.gif"}
                alt="miner"
                width={1200}
                height={800}
                className="w-40 object-cover absolute bottom-0 left-0"
              />
              <div className="absolute right-0 top-0 bg-linear-to-t from-black to-black/0 w-full h-full"></div>
            </div>
          </LeftPanelContent>
        </LeftPanel>
      </PanelContainer>
    </>
  );
};

export default FooterPage;
