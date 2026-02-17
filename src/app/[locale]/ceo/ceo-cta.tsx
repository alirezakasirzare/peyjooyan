"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { CeoStore } from "./ceo-store";
import { motion } from "motion/react";

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
      <div className="fixed top-0 md:top-auto md:bottom-0 end-0 z-50 md:z-auto">
        <div className="relative w-screen h-78 md:h-auto overflow-hidden md:overflow-visible">
          <Image
            src={"/images/ceo.gif"}
            alt="ceo"
            width={1200}
            height={800}
            className="object-cover w-54 ms-auto md:w-96 2xl:w-[20vw] rtl:-scale-x-100"
          />
          <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-full pointer-events-none" />
        </div>

        <Image
          src={"/images/star.png"}
          alt="star"
          width={1200}
          height={800}
          className="w-full h-2/3 md:h-[100dvh] fixed top-0 left-0 object-contain"
        />

        {/* mobile miner */}
        <div className="md:hidden fixed md:absolute left-0 rtl:right-0 md:rig top-40 md:right-0 md:bottom-0">
          <Image
            src={"/images/miner6.png"}
            alt="miner"
            width={1200}
            height={800}
            className="object-cover w-20 md:w-40 -scale-x-100 md:scale-x-100 rtl:scale-x-100"
          />
          <div className="md:hidden absolute inset-0 bg-linear-to-t from-black to-black/0 w-full h-full pointer-events-none" />
        </div>

        {/* web miner */}
        <Image
          src={"/images/miner6.png"}
          alt="miner"
          width={1200}
          height={800}
          className="hidden md:block absolute bottom-0 end-0 object-cover w-20 md:w-40 -scale-x-100 md:scale-x-100 rtl:-scale-x-100"
        />

        <div className="hidden md:block fixed end-0 top-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-black to-black/0 w-1/3 h-full bottom-22"></div>

        <div className="fixed md:absolute md:end-48 start-20 md:start-auto top-40 md:top-auto md:bottom-44 w-50 md:w-70 h-max">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Image
              src={"/images/cloud.svg"}
              alt="cloud"
              width={100}
              height={100}
              className="w-full -scale-x-100 md:scale-x-100 rtl:scale-x-100 rtl:md:-scale-x-100"
            />
            <div className="absolute left-1/2 top-1/2 -translate-1/2">
              <p className="font-title text-[10px] md:text-[17px]">
                {t.rich("title", {
                  span: (e) => <span className="text-primary">{e}</span>,
                })}
              </p>
              <div className="pe-4">
                <Button
                  onClick={handleClickCTA}
                  className="font-title px-3 mt-1 h-7 text-xs md:text-base"
                >
                  {t("btn")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
