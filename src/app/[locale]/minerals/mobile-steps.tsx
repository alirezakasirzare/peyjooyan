"use client";

import { useStore } from "@tanstack/react-store";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "~/components/sections/arrow-icon";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useNoNavigationWithScroll } from "~/hooks/use-no-navigation-with-scroll";
import { cn } from "~/lib/utils";
import { MineralsStore } from "./minerals-store";
import { ReadMoreBtn } from "./read-more-btn";

type StepShape = {
  title: string;
  detailText: string;
};

const Step = ({
  title,
  isActive,
  number,
  onClick,
  detailText,
}: StepShape & {
  isActive: boolean;
  number: number;
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  detailText?: string;
}) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <div className={"flex flex-row gap-4 items-center relative w-max"}>
        <div
          className={cn(
            "relative font-title size-8 border border-primary rounded-full text-foreground bg-background flex justify-center items-center z-10",
            {
              "bg-primary text-primary-foreground": isActive,
              "text-primary": !isActive,
            }
          )}
        >
          {number}
        </div>
        <div className="font-title text-primary">{title}</div>
      </div>

      {isActive && (
        <div className="flex flex-col items-center gap-2 ps-10 pt-4">
          <p className="font-title text-sm rtl:font-text text-foreground/80">
            {detailText}
          </p>
          <Image
            src={"/images/rock.gif"}
            alt="rock"
            width={400}
            height={400}
            className="object-contain w-[180px] -mt-14"
          />
          <div className="flex gap-2">
            <ReadMoreBtn />
            <Button
              size={"icon-sm"}
              className="rounded-full"
              variant={"secondary"}
            >
              <ArrowIcon />
            </Button>
          </div>
        </div>
      )}
    </li>
  );
};

export const MobileSteps = () => {
  const t = useTranslations("minerals");
  const { handleEnter, handleLeave } = useNoNavigationWithScroll();
  const { activeStepIndex } = useStore(MineralsStore);

  const items: StepShape[] = [
    { title: t("steps.step1.title"), detailText: t("steps.step1.detailText") },
    { title: t("steps.step2.title"), detailText: t("steps.step2.detailText") },
    { title: t("steps.step3.title"), detailText: t("steps.step3.detailText") },
    { title: t("steps.step4.title"), detailText: t("steps.step4.detailText") },
  ];

  const handleStepClick = (index: number) => {
    MineralsStore.setState((prev) => ({ ...prev, activeStepIndex: index }));
  };

  return (
    <ScrollArea
      className="h-[calc(100dvh-130px)] md:h-[calc(100dvh-300px)] overflow-hidden md:hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      scrollBarClassName="w-0"
    >
      <ul className="flex flex-col gap-4 before:content-[''] before:absolute before:start-4 before:h-[calc(100%-20px)] before:top-1/2 before:-translate-1/2 before:bottom-0 before:w-px before:bg-primary relative pb-28">
        {items.map((item, i) => (
          <Step
            key={i}
            {...item}
            number={i + 1}
            isActive={activeStepIndex === i}
            onClick={() => handleStepClick(i)}
            isFirst={i === 0}
            isLast={items.length - 1 === i}
            detailText={item.detailText}
          />
        ))}
      </ul>
    </ScrollArea>
  );
};
