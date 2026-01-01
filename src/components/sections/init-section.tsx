import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export const InitSection = () => {
  const t = useTranslations("home");

  return (
    <>
      <Image
        src={"/images/hero.gif"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-[calc(100vh-100px)] object-cover"
      />

      <div className="absolute left-0 bg-linear-to-t from-black to-black/0 w-full h-[calc(100vh-200px)] bottom-22"></div>
      <div className="absolute left-1/2 bottom-26 -translate-x-1/2 w-full">
        <div className="w-max mx-auto">
          <h1 className="text-primary text-center font-medium leading-14 md:leading-[0.9] text-6xl md:text-[100px] lg:text-[170px] xl:text-[220px]">
            {t("title")}
          </h1>
          <h2 className="flex flex-col md:flex-row items-center justify-center md:gap-6 lg:gap-10">
            <div className="text-center font-medium leading-20 md:leading-none text-[112px] md:text-[70px] lg:text-[120px] xl:text-[155px]">
              {t("subtitle.left")}
            </div>
            <div className="text-center font-medium leading-16 md:leading-none text-[74px] md:text-[70px] lg:text-[120px] xl:text-[155px]">
              {t("subtitle.right")}
            </div>
          </h2>
          <div className="flex gap-4 mt-5">
            <Button>{t("cta")}</Button>
            <Button size={"icon"}>
              <ArrowUpRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
