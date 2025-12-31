import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LandingNavs } from "~/components/layout/landing-navs";
import { Button } from "~/components/ui/button";

const HomePage = () => {
  const t = useTranslations("home");

  return (
    <>
      <main className="min-h-screen flex flex-col">
        {/* <Image
          src={"/images/hero.png"}
          alt="hero"
          width={1200}
          height={800}
          className="w-full h-[calc(100vh-100px)] object-cover"
        /> */}
        <Image
          src={"/images/hero.gif"}
          alt="hero"
          width={1200}
          height={800}
          className="w-full h-[calc(100vh-100px)] object-cover"
        />

        <div className="absolute left-0 bg-linear-to-t from-black to-black/0 w-full h-[calc(100vh-200px)] bottom-22"></div>
        <div className="absolute left-1/2 bottom-36 -translate-x-1/2 w-full">
          <div className="w-max mx-auto">
            <h1 className="text-primary text-[240px] leading-40 font-medium text-center">
              {t("title")}
            </h1>
            <h2 className="text-[166px] font-medium leading-40 text-center">
              {t("subtitle")}
            </h2>
            <div className="flex gap-4">
              <Button>{t("cta")}</Button>
              <Button size={"icon"}>
                <ArrowUpRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <LandingNavs />
    </>
  );
};

export default HomePage;
