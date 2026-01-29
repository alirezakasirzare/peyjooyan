"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { MineralsStore } from "./minerals-store";

export const ReadMoreBtn = () => {
  const t = useTranslations("minerals");

  const handleClick = () => {
    MineralsStore.setState({ step: 1 });
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      className="rounded-full font-title"
      onClick={handleClick}
    >
      {t("readMoreBtn")}
    </Button>
  );
};
