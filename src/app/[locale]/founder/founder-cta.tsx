"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { FounderStore } from "./founder-store";

export const FounderCta = () => {
  const t = useTranslations("founder");

  const handleClickCTA = () => {
    FounderStore.setState({
      step: 1,
    });
  };

  return (
    <Button
      className="font-title rtl:font-text px-5"
      variant={"outline"}
      onClick={handleClickCTA}
    >
      {t("readMore")}
    </Button>
  );
};
