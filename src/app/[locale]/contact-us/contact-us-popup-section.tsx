"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { ContactUsStore } from "./contact-us-store";
import { RightPanel } from "~/components/common/right-panel";
import { useStore } from "@tanstack/react-store";
import { PlayIcon, UserIcon } from "lucide-react";
import { ContactUsForm } from "./contact-us-form";

const Step1 = () => {
  const t = useTranslations("connectUs.step1");

  const handleClickCTA = () => {
    ContactUsStore.setState({ step: 2 });
  };

  return (
    <div className="px-10 flex flex-col gap-10">
      <h3 className="text-primary text-[28px] md:text-[34px] font-title leading-none">
        {t.rich("title", {
          span: (e) => <span className="text-foreground">{e}</span>,
        })}
      </h3>

      <ContactUsForm />
    </div>
  );
};

const Step2 = () => {
  const handleClickCTA = () => {
    ContactUsStore.setState({ step: 0 });
  };

  return (
    <>
      <div className="md:absolute p-4 pt-8 md:p-0! bottom-4 left-0 h-full flex flex-col">
        <Image
          src={"/images/miner8.png"}
          alt="miner"
          width={1200}
          height={800}
          className="w-full"
        />
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
