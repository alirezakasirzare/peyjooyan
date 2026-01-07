"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { CeoStore } from "./ceo-store";

export const CeoCta = () => {
  const t = useTranslations("ceo.cta");

  const handleClickCTA = () => {
    console.log("Test");
    CeoStore.setState({
      step: 1,
    });
  };

  return (
    <>
      <div className="fixed top-0 md:top-auto md:bottom-0 right-0 z-51 md:z-auto">
        <div className="relative">
          <Image
            src={"/images/ceo.png"}
            alt="ceo"
            width={1200}
            height={800}
            className="object-cover w-[57%] ms-auto md:w-96"
          />
          <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-full pointer-events-none" />
        </div>

        {/* mobile miner */}
        <div className="md:hidden fixed md:absolute left-0 md:rig top-40 md:right-0 md:bottom-0">
          <Image
            src={"/images/miner6.png"}
            alt="miner"
            width={1200}
            height={800}
            className="object-cover w-20 md:w-40 -scale-x-100 md:scale-x-100"
          />
          <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-full pointer-events-none" />
        </div>

        {/* web miner */}
        <Image
          src={"/images/miner6.png"}
          alt="miner"
          width={1200}
          height={800}
          className="absolute bottom-0 right-0 object-cover w-20 md:w-40 -scale-x-100 md:scale-x-100"
        />

        <div className="hidden md:block fixed right-0 top-0 bg-linear-to-r from-black to-black/0 w-1/3 h-full bottom-22"></div>

        <div className="fixed md:absolute md:right-48 left-20 md:left-auto top-40 md:top-auto md:bottom-44 w-50 md:w-70 bg-no-repeat bg-cover h-max sbg-[url(/images/cloud.svg)]">
          <Image
            src={"/images/cloud.svg"}
            alt="cloud"
            width={100}
            height={100}
            className="w-full -scale-x-100 md:scale-x-100"
          />
          <div className="absolute left-1/2 top-1/2 -translate-1/2">
            <p className="font-title text-xs md:text-base">
              {t.rich("title", {
                span: (e) => <span className="text-primary">{e}</span>,
              })}
            </p>
            <Button
              onClick={handleClickCTA}
              className="font-title px-4 mt-1 text-xs md:text-base"
            >
              {t("btn")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
