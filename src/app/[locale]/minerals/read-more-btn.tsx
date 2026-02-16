"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { MineralsStore } from "./minerals-store";

export const ReadMoreBtn = () => {
  const t = useTranslations("minerals");

  const handleClick = () => {
    MineralsStore.setState((prev) => ({
      step: 1,
      activeStepIndex: prev.activeStepIndex,
    }));
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      className="rounded-full font-title rtl:font-text"
      onClick={handleClick}
    >
      {t("readMoreBtn")}
    </Button>
  );
};
