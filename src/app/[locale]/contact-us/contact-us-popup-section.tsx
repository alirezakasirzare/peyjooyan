"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { ContactUsStore } from "./contact-us-store";
import { RightPanel } from "~/components/common/right-panel";
import { useStore } from "@tanstack/react-store";
import { ContactUsForm } from "./contact-us-form";
import { ScrollArea } from "~/components/ui/scroll-area";

const Step1 = () => {
  const t = useTranslations("connectUs.step1");

  return (
    <div className="flex flex-col p-4 pb-10 pt-8 md:px-10! md:py-0!">
      <h3 className="text-primary text-[28px] md:text-[34px] font-title leading-none">
        {t.rich("title", {
          span: (e) => <span className="text-foreground">{e}</span>,
        })}
      </h3>
      <p className="mt-1 font-title">{t("subtitle")}</p>

      <div className="mt-6">
        <ScrollArea
          type="hover"
          className="grow h-[calc(100dvh-200px)] overflow-hidden"
          scrollBarClassName="w-0"
        >
          <ContactUsForm />
        </ScrollArea>
      </div>
    </div>
  );
};

const Step2 = () => {
  const t = useTranslations("connectUs.step2");

  const handleClickCTA = () => {
    ContactUsStore.setState({ step: 0 });
  };

  return (
    <>
      <div className="p-4 pt-8 md:p-0! h-full flex flex-col">
        <div className="px-10">
          <h3 className="text-primary text-[28px] md:text-[34px] font-title leading-none">
            {t.rich("title", {
              span: (e) => <span className="text-foreground">{e}</span>,
            })}
          </h3>
          <p className="mt-1 font-title">{t("subtitle")}</p>
        </div>
        <Image
          src={"/images/miner8.png"}
          alt="miner"
          width={1200}
          height={800}
          className="w-full mt-auto rtl:-scale-x-100"
        />

        <div
          className="absolute left-1/2 bottom-10 -translate-x-1/2 w-full px-8 md:px-20"
          onClick={handleClickCTA}
        >
          <Button className="font-title rtl:font-text w-full" size={"lg"}>
            {t("cta")}
          </Button>
        </div>
      </div>
    </>
  );
};

export const ContactUsPopupSection = () => {
  const { step } = useStore(ContactUsStore);

  const handleCloseSheet = () => {
    ContactUsStore.setState((prev) => ({ step: (prev.step - 1) as 0 | 1 | 2 }));
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
