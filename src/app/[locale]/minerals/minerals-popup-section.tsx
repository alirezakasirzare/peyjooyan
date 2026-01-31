"use client";

import { useStore } from "@tanstack/react-store";
import { MineralsStore } from "./minerals-store";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { RightPopupCard } from "~/components/common/right-popup-card";
import { LiquidGlassBtnWrapper } from "~/components/sections/liquid-glass-btn-wrapper";
import { ScrollArea } from "~/components/ui/scroll-area";

const Step1 = () => {
  const t = useTranslations("minerals.step1");

  const handleClickCTA = () => {
    MineralsStore.setState({ step: 2 });
  };

  return (
    <>
      <div className="p-4 pt-8 md:pt-0!">
        <h3 className="text-primary text-[34px] font-title leading-none text-center">
          {t("title")}
        </h3>
        <ScrollArea
          type="hover"
          className="grow overflow-hidden h-[500px]"
          scrollBarClassName="w-0"
        >
          <div className="text-foreground/80 text-justify font-extralight">
            <p>{t("text1")}</p>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
            <p>{t("text4")}</p>
            <p>{t("text5")}</p>
            <p>{t("text6")}</p>
          </div>
        </ScrollArea>

        <div className="flex justify-center">
          <LiquidGlassBtnWrapper>
            <Button
              className="font-title"
              size={"lg"}
              onClick={handleClickCTA}
              variant={"glass"}
            >
              {t("cta")}
            </Button>
          </LiquidGlassBtnWrapper>
        </div>
      </div>
    </>
  );
};

const Step2 = () => {
  const t = useTranslations("minerals.step2");

  const handleClickCTA = () => {
    MineralsStore.setState({ step: 0 });
  };
  return (
    <div className="w-screen md:w-auto p-4 pt-8 md:pt-0!">
      <h3 className="text-primary text-[34px] font-title leading-none text-center">
        {t("title")}
      </h3>
      <div className="h-[500px] flex justify-center items-center -mt-20 md:mt-0">
        <Image
          src={"/images/rock.gif"}
          alt="rock"
          width={400}
          height={400}
          className="object-contain w-[300px]"
        />
      </div>

      <div className="flex justify-center">
        <LiquidGlassBtnWrapper>
          <Button
            className="font-title"
            size={"lg"}
            onClick={handleClickCTA}
            variant={"glass"}
          >
            {t("cta")}
          </Button>
        </LiquidGlassBtnWrapper>
      </div>
    </div>
  );
};

export const MineralsPopupSection = () => {
  const { step } = useStore(MineralsStore);

  const steps = {
    0: () => <></>,
    1: Step1,
    2: Step2,
  } as const;

  const CurrentStep = steps[step];

  const handleCloseSheet = () => {
    MineralsStore.setState((prev) => ({ step: (prev.step - 1) as 0 | 1 }));
  };

  return (
    <RightPopupCard isOpen={step > 0} onCloseMobile={handleCloseSheet}>
      <CurrentStep />
    </RightPopupCard>
  );
};
