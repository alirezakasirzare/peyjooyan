import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { Slider } from "./slider";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";
import { ArrowUpRightIcon } from "lucide-react";

const NewsPage = async ({ params }: PageProps<"/[locale]/news">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("news");

  return (
    <div className="p-6 md:pt-10 pb-10 md:pb-0 flex flex-col max-h-screen relative z-50">
      <h2 className="font-title text-[60px] md:text-[80px] leading-none">
        {t("title")}
      </h2>
      <h1 className="font-title text-[16px] md:text-[40px] text-primary leading-none">
        {t("subtitle")}
      </h1>

      <div className="flex gap-4 mt-5">
        <Button
          className="font-title rtl:font-text"
          variant={"outline-secondary"}
          asChild
        >
          <Link href={"/about-us"}>{t("cta")}</Link>
        </Button>
        <Button size={"icon"} variant={"outline-secondary"}>
          <ArrowUpRightIcon className="size-4 fill-primary-foreground" />
        </Button>
      </div>

      <div className="mt-6 md:-mt-10">
        <Slider />
      </div>
    </div>
  );
};

export default NewsPage;
