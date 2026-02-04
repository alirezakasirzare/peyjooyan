"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { FounderStore } from "./founder-store";
import { RightPanel } from "~/components/common/right-panel";
import { useStore } from "@tanstack/react-store";
import { PlayIcon, UserIcon } from "lucide-react";

const Step1 = () => {
  const t = useTranslations("founder.step1");

  const handleClickCTA = () => {
    FounderStore.setState({ step: 2 });
  };

  return (
    <>
      <div className="md:absolute left-0 bottom-0 -z-10 w-full pt-8 md:pt-0">
        <div className="px-10 md:ps-10 md:pe-28 flex justify-center md:-mb-14">
          <h3 className="text-primary text-[28px] md:text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <Image
          src={"/images/founder2.png"}
          alt="miner"
          width={1200}
          height={800}
          className="w-full rtl:-scale-x-100"
        />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-8 md:px-20">
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
  const t = useTranslations("founder.step2");
  const handleClickCTA = () => {
    FounderStore.setState({ step: 0 });
  };

  return (
    <>
      <div className="md:absolute p-4 pt-8 md:p-0! bottom-4 left-0 h-full flex flex-col">
        <div className="flex justify-center px-8 md:px-18 mb-auto">
          <h3 className="text-primary text-[28px] md:text-[34px] font-title leading-none">
            {t("title")}
          </h3>
        </div>
        <div className="px-8 md:px-20 mt-16 md:mt-0">
          <div className="h-40 bg-white text-primary rounded-lg flex justify-center items-center">
            <PlayIcon color="size-6" fill="red" />
          </div>
          <div className="flex justify-center mt-8 pb-10">
            <Button
              className="rounded-md px-20 font-title rtl:font-text w-full"
              size={"lg"}
              onClick={handleClickCTA}
            >
              {t("cta")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const FounderPopupSection = () => {
  const { step } = useStore(FounderStore);

  const handleCloseSheet = () => {
    FounderStore.setState((prev) => ({ step: (prev.step - 1) as 0 | 1 | 2 }));
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
