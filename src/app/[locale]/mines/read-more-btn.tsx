"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { MinesStore } from "./mines-store";

export const ReadMoreBtn = () => {
  const t = useTranslations("mines");

  const handleClick = () => {
    MinesStore.setState({ step: 1 });
  };

  return (
    <Button className="font-title rtl:font-text" onClick={handleClick}>
      {t("cta")}
    </Button>
  );
};
