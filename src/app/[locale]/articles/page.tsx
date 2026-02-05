import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  LeftPanel,
  LeftPanelContent,
  LeftPanelHeader,
} from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { Button } from "~/components/ui/button";
import { ArticleList } from "./article-list";
import { DesktopContent } from "./desktop-content";
import Image from "next/image";
import { PageContainer } from "~/components/common/page-container";

const ArticlesPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("articles");

  return (
    <>
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
              <h2 className="font-title text-[60px] md:text-[120px] leading-none">
                {t("title")}
              </h2>
              <h1 className="font-title text-[20px] md:text-[55px] text-primary leading-none -mt-1 md:-mt-3 rtl:-mt-2 rtl:md:-mt-6">
                {t("subtitle")}
              </h1>
              <div className="flex gap-4 mt-3">
                <Button
                  className="font-title rtl:font-text px-5"
                  variant={"outline-secondary"}
                >
                  {t("readMore")}
                </Button>
                <Button size={"icon"} variant={"outline-secondary"}>
                  <ArrowUpRightIcon className="size-4 fill-primary" />
                </Button>
              </div>
            </LeftPanelHeader>
            <LeftPanelContent className="md:hidden">
              <div className="pb-20">
                <ArticleList />
              </div>
            </LeftPanelContent>
          </LeftPanel>
          <DesktopContent />
        </PanelContainer>
      </PageContainer>
    </>
  );
};

export default ArticlesPage;
