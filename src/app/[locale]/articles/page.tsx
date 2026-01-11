import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LeftPanel, LeftPanelHeader } from "~/components/common/left-panel";
import { PanelContainer } from "~/components/common/panel-container";
import { Button } from "~/components/ui/button";
import { ArticleList } from "./article-list";

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
            <h1 className="font-title text-[60px] md:text-[55px] text-primary leading-none">
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
        </LeftPanel>
        <div className="p-20">
          <ArticleList />
          <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
        </div>
      </PanelContainer>
    </>
  );
};

export default ArticlesPage;
