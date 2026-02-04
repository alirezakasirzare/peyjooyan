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
      <div className="md:absolute left-0 bottom-0 -z-10 w-full pt-9 md:pt-0">
        <div className="px-10 md:pe-0 md:ps-20 flex justify-center mb-2">
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-8 md:px-20">
          <Button
            className="rounded-md font-title rtl:font-text w-full"
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
        className="md:w-full md:absolute left-0 bottom-0 -z-10 rtl:-scale-x-100"
      />
      <div className="absolute bottom-12 left-0">
        <div className="flex justify-center px-8 md:px-20">
          <h3 className="text-white text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <div className="flex justify-center mt-8 px-8 md:px-20">
          <Button
            className="rounded-md font-title rtl:font-text w-full"
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

  const steps = {
    0: () => <></>,
    1: Step1,
    2: Step2,
  } as const;

  const CurrentStep = steps[step];

  const handleCloseSheet = () => {
    MinesStore.setState((prev) => ({ step: (prev.step - 1) as 0 | 1 }));
  };

  return (
    <RightPanel isOpen={step > 0} onCloseMobile={handleCloseSheet}>
      <CurrentStep />
    </RightPanel>
  );
};
