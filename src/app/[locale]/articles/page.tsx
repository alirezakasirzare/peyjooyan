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
import { ScrollArea } from "~/components/ui/scroll-area";
import { DesktopContent } from "./desktop-content";

const ArticlesPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("articles");

  return (
    <>
      <PanelContainer>
        <LeftPanel>
          <LeftPanelHeader>
            <h2 className="font-title text-[60px] md:text-[120px] leading-none">
              {t("title")}
            </h2>
            <h1 className="font-title text-[20px] md:text-[55px] text-primary leading-none">
              {t("subtitle")}
            </h1>
            <div className="flex gap-4 mt-5">
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
    </>
  );
};

export default ArticlesPage;
