import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import pureData from "~/data/news.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "~/lib/utils";
import { PanelContainer } from "~/components/common/panel-container";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { DesktopImage } from "./desctop-image";
import { routing } from "~/i18n/routing";

const data = {
  en: pureData.enNews,
  fa: pureData.faNews,
};

const SingleNewsPage = async ({
  params,
}: PageProps<"/[locale]/news/[newsId]">) => {
  const { locale, newsId } = await params;
  setRequestLocale(locale as Locale);

  const slidersData = data[locale as "en" | "fa"];

  const item = slidersData.find((item) => item.id.toString() === newsId);
  if (!item) return notFound();

  return (
    <PanelContainer>
      <LeftPanel>
        <LeftPanelHeader>
          <h2 className="font-title text-[26px] md:text-[40px] leading-none">
            {item.title}
          </h2>

          <p className="font-title text-[16px] md:text-[30px] text-primary leading-none">
            {formatDate(new Date(item.date))}
          </p>
        </LeftPanelHeader>
        <LeftPanelContent>
          <div className="relative md:hidden">
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={600}
              className="w-full"
            />
            <div className="absolute inset-0 bg-background/50"></div>
          </div>

          <div className="text-foreground/80 mt-4 pb-20">{item.content}</div>
        </LeftPanelContent>
      </LeftPanel>

      <DesktopImage src={item.src} title={item.title} />
    </PanelContainer>
  );
};

export default SingleNewsPage;
