"use client";

import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "~/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGlassContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { GlassCard } from "@developer-hub/liquid-glass";
// import { LiquidGlass } from "@liquidglass/react";

type MenuItemShape = {
  text: string;
  path: string;
};

export const LandingMenu = () => {
  const t = useTranslations("menu");
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
  return (
    <div className="absolute left-0 bottom-0 w-full h-[100px]">
      <div className="flex gap-5 justify-center rtl:flex-row-reverse items-center h-full">
        <DropdownMenu open modal={false}>
          <DropdownMenuTrigger>
            <Button variant={"glass"} size={"icon-lg"} asChild>
              <Link href={"/"} replace>
                <XIcon className="size-4" />
              </Link>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuGlassContent side="left" align="end">
            <div>
              {menuItems.map((item) => (
                <Link href={item.path} key={item.path} replace>
                  <DropdownMenuItem className="cursor-pointer text-2xl font-light text-center justify-center">
                    {item.text}
                  </DropdownMenuItem>
                </Link>
              ))}
            </div>
          </DropdownMenuGlassContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
