"use client";

import { LanguagesIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "~/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LiquidGlassCardWrapper } from "../sections/liquid-glass-card-wrapper";
import { useIsMobile } from "~/hooks/use-is-mobile";
import { useMenu } from "~/hooks/use-menu";
import { LiquidGlassBtnWrapper } from "../sections/liquid-glass-btn-wrapper";
import { useStore } from "@tanstack/react-store";
import { menuStore } from "~/store/menu-store";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const isMobile = useIsMobile();

  const { items } = useMenu();

  const handleCloseMenu = () => {
    menuStore.setState({
      isOpen: false,
    });
  };
  return (
    <div className="absolute left-0 bottom-0 w-full h-[100px] z-100">
      <div className="px-6 flex gap-5 justify-end md:justify-center rtl:flex-row-reverse items-center h-full">
        <DropdownMenu open modal={false}>
          <LiquidGlassBtnWrapper>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"glass"}
                size={"icon-lg"}
                onClick={handleCloseMenu}
              >
                <XIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
          </LiquidGlassBtnWrapper>

          <DropdownMenuContent
            side={isMobile ? "top" : "left"}
            align="end"
            sideOffset={10}
            pureStyle
            className="z-100"
          >
            <LiquidGlassCardWrapper>
              <div className="flex flex-col gap-2 py-6">
                {items
                  .filter((item) => !item.hide)
                  .map((item) => (
                    <Link
                      href={item.path}
                      key={item.path}
                      onClick={handleCloseMenu}
                    >
                      <DropdownMenuItem
                        pureStyle
                        className="font-title rtl:font-text outline-none! cursor-pointer md:text-2xl font-light text-center justify-center px-10 py-2"
                      >
                        {item.text}
                      </DropdownMenuItem>
                    </Link>
                  ))}
              </div>
            </LiquidGlassCardWrapper>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const LandingNavs = () => {
  const currentLocale = useLocale();
  const otherLocale: "fa" | "en" = currentLocale === "en" ? "fa" : "en";
  const pathname = usePathname();

  const { activeItem } = useMenu();

  const handleOpenMenu = () => {
    menuStore.setState({
      isOpen: true,
    });
  };

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
          <Button variant={"glass"} size={"icon-lg"} onClick={handleOpenMenu}>
            <MenuIcon className="size-4" />
          </Button>
        </LiquidGlassBtnWrapper>
      </div>
    </div>
  );
};

export const LandingMenu = () => {
  const { isOpen } = useStore(menuStore);

  if (isOpen) {
    return <Menu />;
  }

  return <LandingNavs />;
};
