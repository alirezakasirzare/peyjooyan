"use client";

import { LanguagesIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link, usePathname } from "~/i18n/navigation";
import { useLocale } from "next-intl";
import { useMenu } from "~/hooks/use-menu";

export const LandingNavs = () => {
  const currentLocale = useLocale();
  const otherLocale: "fa" | "en" = currentLocale === "en" ? "fa" : "en";
  const pathname = usePathname();

  const { activeItem } = useMenu();

  return (
    <div className="fixed left-0 bottom-0 w-full h-[100px] z-50">
      <div className="flex gap-5 justify-center rtl:flex-row-reverse items-center h-full">
        <Button
          variant={"glass"}
          size={"icon-lg"}
          className="glass-btn"
          asChild
        >
          <Link href={pathname} locale={otherLocale}>
            <LanguagesIcon className="size-4" />
          </Link>
        </Button>
        <Button
          variant={"glass"}
          className="glass-btn font-medium font-text"
          size={"lg"}
        >
          {activeItem?.text}
        </Button>
        <Button
          className="glass-btn"
          variant={"glass"}
          size={"icon-lg"}
          asChild
        >
          <Link href={"/menu"}>
            <MenuIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
