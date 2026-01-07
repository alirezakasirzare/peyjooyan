"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { CeoStore } from "./ceo-store";
import { RightPanel } from "~/components/common/right-panel";
import { useStore } from "@tanstack/react-store";

const Step1 = () => {
  const t = useTranslations("ceo.step1");

  const handleClickCTA = () => {
    CeoStore.setState({ step: 2 });
  };

  return (
    <>
      <div className="md:absolute left-0 bottom-0 -z-10 w-full pt-8 md:pt-0">
        <div className="px-10 md:ps-10 md:pe-28 flex justify-center -mb-14">
          <h3 className="text-primary text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <Image
          src={"/images/miner7.png"}
          alt="miner"
          width={1200}
          height={800}
          className="w-full"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Button
            className="rounded-md px-20 font-title rtl:font-text"
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
  const t = useTranslations("ceo.step1");
  const handleClickCTA = () => {
    CeoStore.setState({ step: 0 });
  };

  return (
    <>
      <Image
        src={"/images/miner5.png"}
        alt="miner"
        width={1200}
        height={800}
        className="w-screen md:w-full md:absolute left-0 bottom-0 -z-10"
      />
      <div className="absolute bottom-4 left-0">
        <div className="flex justify-center px-8 md:px-20">
          <h3 className="text-white text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            className="rounded-md px-20 font-title rtl:font-text"
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

export const CeoPopupSection = () => {
  const { step } = useStore(CeoStore);

  const handleCloseSheet = () => {
    CeoStore.setState((prev) => ({ step: (prev.step - 1) as 0 | 1 | 2 }));
  };

  const steps = {
    0: () => <></>,
    1: Step1,
    2: Step2,
  } as const;

  const CurrentStep = steps[step];

  return (
    <RightPanel isOpen={step > 0} onCloseMobile={handleCloseSheet}>
      <CurrentStep />
    </RightPanel>
  );
};
