import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { ArrowIcon } from "~/components/sections/arrow-icon";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";

const HomePage = async ({ params }: PageProps<"/[locale]">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("home");

  return (
    <>
      <Image
        src={"/images/hero.gif"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-2/3 md:h-screen fixed top-0 left-0 object-cover"
      />

      <div className="fixed left-0 bg-linear-to-t from-black to-black/0 w-full h-screen bottom-0 hidden md:block"></div>
      <div className="fixed top-0 left-0 bg-linear-to-t from-black to-black/0 w-full h-2/3 bottom-0 md:hidden"></div>

      <Image
        src={"/images/star.png"}
        alt="star"
        width={1200}
        height={800}
        className="w-full h-2/3 md:h-screen fixed top-0 left-0 object-contain"
      />

      <div className="fixed left-1/2 bottom-26 -translate-x-1/2 w-full">
        <div className="w-max mx-auto">
          <h1 className="text-primary font-title text-center font-medium leading-14 md:leading-[0.9] text-6xl md:text-[100px] lg:text-[170px] xl:text-[220px]">
            {t("title")}
          </h1>
          <h2 className="flex flex-col font-title md:flex-row items-center justify-center md:gap-6 lg:gap-10">
            <div className="text-center font-medium leading-20 md:leading-none text-[112px] md:text-[70px] lg:text-[120px] xl:text-[155px]">
              {t("subtitle.left")}
            </div>
            <div className="text-center font-title font-medium leading-16 md:leading-none text-[74px] md:text-[70px] lg:text-[120px] xl:text-[155px]">
              {t("subtitle.right")}
            </div>
          </h2>
          <div className="flex gap-4 mt-5">
            <Button className="font-title rtl:font-text" asChild>
              <Link href={"/about-us"}>{t("cta")}</Link>
            </Button>
            <Button size={"icon"}>
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
