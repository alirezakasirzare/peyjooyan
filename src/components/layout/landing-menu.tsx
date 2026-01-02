"use client";

import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "~/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { LiquidGlass } from "../sections/liquid-glass";
import { useIsMobile } from "~/hooks/use-is-mobile";
import { useRouter } from "next/navigation";

type MenuItemShape = {
  text: string;
  path: string;
};

export const LandingMenu = () => {
  const t = useTranslations("menu");
  const isMobile = useIsMobile();

  const menuItems: MenuItemShape[] = [
    {
      text: t("home"),
      path: "/",
    },
    {
      text: t("aboutUs"),
      path: "/about-us",
    },
    {
      text: t("mnes"),
      path: "/mines",
    },
    {
      text: t("mnerals"),
      path: "/minerals",
    },
    {
      text: t("ceo"),
      path: "/ceo",
    },
    {
      text: t("founder"),
      path: "/founder",
    },
    {
      text: t("news"),
      path: "/news",
    },
    {
      text: t("articles"),
      path: "/articles",
    },
    {
      text: t("contactUs"),
      path: "/contact-us",
    },
  ];

  const router = useRouter();
  const handleCloseMenu = () => {
    router.back();
  };
  return (
    <div className="absolute left-0 bottom-0 w-full h-[100px]">
      <div className="px-6 flex gap-5 justify-end md:justify-center rtl:flex-row-reverse items-center h-full">
        <DropdownMenu open modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"glass"}
              size={"icon-lg"}
              className="glass-btn"
              onClick={handleCloseMenu}
            >
              <XIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side={isMobile ? "top" : "left"}
            align="end"
            sideOffset={10}
            pureStyle
          >
            <LiquidGlass>
              <div className="flex flex-col gap-2 py-6">
                {menuItems.map((item) => (
                  <Link href={item.path} key={item.path} replace>
                    <DropdownMenuItem
                      pureStyle
                      className="outline-none! cursor-pointer md:text-2xl font-light text-center justify-center px-10 py-2"
                    >
                      {item.text}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </div>
            </LiquidGlass>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
