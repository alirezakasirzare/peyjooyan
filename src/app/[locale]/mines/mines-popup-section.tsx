"use client";

import { useStore } from "@tanstack/react-store";
import { RightPanel } from "~/components/common/right-panel";
import { MinesStore } from "./mines-store";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

const Step1 = () => {
  const t = useTranslations("mines.step1");

  const handleClickCTA = () => {
    MinesStore.setState({ step: 2 });
  };

  return (
    <>
      <div className="absolute left-0 bottom-0 -z-10 w-full">
        <div className="ps-20 flex justify-center mb-2">
          <h3 className="text-primary text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <Image
          src={"/images/miner4.png"}
          alt="miner"
          width={1200}
          height={800}
          className="w-full"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Button
            className="rounded-md px-20 font-title"
            size={"lg"}
            onClick={handleClickCTA}
          >
            {t("cta")}
          </Button>
        </div>
      </div>
    </>
  );
};

const Step2 = () => {
  const t = useTranslations("mines.step2");

  const handleClickCTA = () => {
    MinesStore.setState({ step: 0 });
  };
  return (
    <>
      <Image
        src={"/images/miner5.png"}
        alt="miner"
        width={1200}
        height={800}
        className="w-full absolute left-0 bottom-0 -z-10"
      />
      <div className="absolute bottom-4 left-0">
        <div className="flex justify-center px-20">
          <h3 className="text-white text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            className="rounded-md px-20 font-title"
            size={"lg"}
            onClick={handleClickCTA}
          >
            {t("cta")}
          </Button>
        </div>
      </div>
    </>
  );
};

export const MinesPopupSection = () => {
  const { step } = useStore(MinesStore);

  if (step === 0) return null;

  const steps = {
    1: Step1,
    2: Step2,
  } as const;

  const CurrentStep = steps[step];

  if (!CurrentStep) return null;

  return (
    <RightPanel>
      <CurrentStep />
    </RightPanel>
  );
};
