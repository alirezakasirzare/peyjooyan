"use client";

import { useStore } from "@tanstack/react-store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowIcon } from "~/components/sections/arrow-icon";
import { Button } from "~/components/ui/button";
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
  isFirst,
  isLast,
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
    <li
      className={cn(
        "relative before:content-[''] before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-full before:h-[0.5px] before:bg-primary cursor-pointer transition-all duration-300",
        {
          grow: isActive,
        },
      )}
      onClick={onClick}
    >
      {isActive && (
        <>
          <div className="absolute flex flex-col items-center gap-4 bottom-20 start-0 w-max">
            <Image
              src={"/images/rock.gif"}
              alt="rock"
              width={400}
              height={400}
              className="object-contain w-[220px] -ms-80 rtl:-ms-30"
            />
            <p className="font-title text-sm rtl:font-text ps-14 rtl:ps-9 text-foreground/80">
              {detailText}
            </p>
          </div>

          <div className="w-10 absolute start-26 top-0 flex flex-row gap-2">
            <ReadMoreBtn />
            <Button
              size={"icon-sm"}
              className="rounded-full"
              variant={"secondary"}
            >
              <ArrowIcon />
            </Button>
          </div>
        </>
      )}

      <div
        className={cn("flex flex-col gap-2 items-center relative px-4 w-max", {
          "before:content-[''] before:absolute before:start-0 before:top-4 before:-translate-y-1/2 before:w-1/2 before:h-[8px] before:bg-background":
            isFirst,
          "after:content-[''] after:absolute after:end-0 after:top-4 after:-translate-y-1/2 after:w-1/2 after:h-[8px] after:bg-background":
            isLast && !isActive,
        })}
      >
        <div
          className={cn(
            "relative font-title size-8 border border-primary rounded-full text-foreground bg-background flex justify-center items-center z-10",
            {
              "bg-primary text-primary-foreground": isActive,
              "text-primary": !isActive,
            },
          )}
        >
          {number}
        </div>
        <div className="font-title text-primary">{title}</div>
      </div>
    </li>
  );
};

export const DesktopSteps = () => {
  const t = useTranslations("minerals");
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
    <div className="hidden lg:block">
      <ul className="flex mt-5 pt-[340px]">
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
    </div>
  );
};
