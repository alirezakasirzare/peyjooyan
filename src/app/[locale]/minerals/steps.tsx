import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

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
          <Button size={"sm"} variant={"secondary"} className="rounded-full">
            Read More
          </Button>
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

export const Steps = () => {
  const items: StepShape[] = [
    {
      title: "Lead and zinc",
      isActive: true,
      moreLink: "/",
      onAction: () => {},
    },
    { title: "Copper", isActive: false },
    { title: "Industrial soil", isActive: false },
    { title: "Polymetal Mine", isActive: false },
  ];
  return (
    <ul className="flex">
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
  );
};
