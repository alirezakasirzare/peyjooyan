"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ReadMoreBtn } from "./read-more-btn";
import Image from "next/image";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useNoNavigationWithScroll } from "~/hooks/use-no-navigation-with-scroll";
import { useTranslations } from "next-intl";

type NonActiveStepShape = {
  isActive: false;
};

type ActiveStepShape = {
  isActive: true;
  onAction: () => void;
  moreLink: string;
};

type StepShape = { title: string } & (NonActiveStepShape | ActiveStepShape);

const Step = (
  data: StepShape & {
    number: number;
    isFirst?: boolean;
    isLast?: boolean;
  },
) => {
  const t = useTranslations("minerals");

  return (
    <li>
      <div className={"flex flex-row gap-4 items-center relative w-max"}>
        <div
          className={cn(
            "relative font-title size-8 border border-primary rounded-full text-foreground bg-background flex justify-center items-center z-10",
            {
              "bg-primary text-primary-foreground": data.isActive,
              "text-primary": !data.isActive,
            },
          )}
        >
          {data.number}
        </div>
        <div className="font-title text-primary">{data.title}</div>
      </div>

      {data.isActive && (
        <div className="flex flex-col items-center gap-2 ps-10 pt-4">
          <p className="font-title text-sm">{t("rockText")}</p>
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
              <ArrowUpRightIcon className="size-4 fill-primary-foreground" />
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
  const items: StepShape[] = [
    {
      title: t("steps.0"),
      isActive: true,
      moreLink: "/",
      onAction: () => {},
    },
    { title: t("steps.1"), isActive: false },
    { title: t("steps.2"), isActive: false },
    { title: t("steps.3"), isActive: false },
  ];

  return (
    <ScrollArea
      className="h-[calc(100vh-300px)] overflow-hidden md:hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      scrollBarClassName="w-0"
    >
      <ul className="flex flex-col gap-4 before:content-[''] before:absolute before:left-4 before:h-[calc(100%-20px)] before:top-1/2 before:-translate-1/2 before:bottom-0 before:w-px before:bg-primary relative">
        {items.map((item, i) => (
          <Step
            key={i}
            {...item}
            number={i + 1}
            isFirst={i === 0}
            isLast={items.length - 1 === i}
          />
        ))}
      </ul>
    </ScrollArea>
  );
};
