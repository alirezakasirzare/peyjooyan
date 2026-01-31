import { ArrowUpRightIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ReadMoreBtn } from "./read-more-btn";
import Image from "next/image";

type NonActiveStepShape = {
  isActive: false;
};

type ActiveStepShape = {
  isActive: true;
  onAction: () => void;
  moreLink: string;
};

type StepShape = { title: string } & (NonActiveStepShape | ActiveStepShape);

const Step = async (
  data: StepShape & {
    number: number;
    isFirst?: boolean;
    isLast?: boolean;
  },
) => {
  const t = await getTranslations("minerals");

  return (
    <li
      className={cn(
        "relative before:content-[''] before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-full before:h-[0.5px] before:bg-primary",
        {
          grow: data.isActive,
        },
      )}
    >
      {data.isActive && (
        <div className="w-10 absolute left-26 top-0 flex flex-row gap-2">
          <ReadMoreBtn />
          <Button
            size={"icon-sm"}
            className="rounded-full"
            variant={"secondary"}
          >
            <ArrowUpRightIcon className="size-4 fill-primary-foreground" />
          </Button>
        </div>
      )}

      <div
        className={cn("flex flex-col gap-2 items-center relative px-4 w-max", {
          "before:content-[''] before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-1/2 before:h-[8px] before:bg-background":
            data.isFirst,
          "after:content-[''] after:absolute after:right-0 after:top-4 after:-translate-y-1/2 after:w-1/2 after:h-[8px] after:bg-background":
            data.isLast,
        })}
      >
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
    </li>
  );
};

export const DesktopSteps = async () => {
  const t = await getTranslations("minerals");
  const items: StepShape[] = [
    {
      title: t("steps.step1"),
      isActive: true,
      moreLink: "/",
      onAction: () => {},
    },
    { title: t("steps.step2"), isActive: false },
    { title: t("steps.step3"), isActive: false },
    { title: t("steps.step4"), isActive: false },
  ];
  return (
    <div className="hidden lg:block">
      <Image
        src={"/images/rock.gif"}
        alt="rock"
        width={400}
        height={400}
        className="object-contain w-[180px] -mt-20 ml-64"
      />
      <p className="font-title text-sm">{t("rockText")}</p>
      <ul className="flex mt-5">
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
    </div>
  );
};
