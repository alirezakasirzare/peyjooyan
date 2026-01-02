import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";

export const InitSection = () => {
  const t = useTranslations("home");

  return (
    <>
      <Image
        src={"/images/hero.gif"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-screen fixed top-0 left-0 object-cover"
      />

      <div className="fixed left-0 bg-linear-to-t from-black to-black/0 w-full h-[calc(100vh)] bottom-0"></div>
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
              <ArrowUpRightIcon className="size-4 fill-primary-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
