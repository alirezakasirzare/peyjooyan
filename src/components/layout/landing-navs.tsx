"use client";

import { LanguagesIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link, usePathname } from "~/i18n/navigation";
import { useLocale } from "next-intl";
import { useMenu } from "~/hooks/use-menu";
import { LiquidGlassBtnWrapper } from "../sections/liquid-glass-btn-wrapper";

export const LandingNavs = () => {
  const currentLocale = useLocale();
  const otherLocale: "fa" | "en" = currentLocale === "en" ? "fa" : "en";
  const pathname = usePathname();

  const { activeItem } = useMenu();

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 w-min">
      <div className="flex gap-5 justify-center rtl:flex-row-reverse items-center h-full">
        <LiquidGlassBtnWrapper>
          <Button variant={"glass"} size={"icon-lg"} asChild>
            <Link href={pathname} locale={otherLocale}>
              <LanguagesIcon className="size-4" />
            </Link>
          </Button>
        </LiquidGlassBtnWrapper>
        <LiquidGlassBtnWrapper>
          <Button
            variant={"glass"}
            className="font-medium font-text"
            size={"lg"}
          >
            {activeItem?.text}
          </Button>
        </LiquidGlassBtnWrapper>
        <LiquidGlassBtnWrapper>
          <Button variant={"glass"} size={"icon-lg"} asChild>
            <Link href={"/menu"}>
              <MenuIcon className="size-4" />
            </Link>
          </Button>
        </LiquidGlassBtnWrapper>
      </div>
    </div>
  );
};
