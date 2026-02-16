"use client";

import { LanguagesIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link, usePathname } from "~/i18n/navigation";
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
import Image from "next/image";
import { motion } from "motion/react";

export const Menu = () => {
  const isMobile = useIsMobile();
  const { isOpen } = useStore(menuStore);

  const { items } = useMenu();

  const handleCloseMenu = () => {
    menuStore.setState({
      isOpen: false,
    });
  };

  const handleOpenMenu = () => {
    menuStore.setState({
      isOpen: true,
    });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={() => {}} modal={false}>
      <LiquidGlassBtnWrapper>
        <DropdownMenuTrigger asChild>
          {isOpen ? (
            <Button
              variant={"glass"}
              size={"icon-lg"}
              onClick={handleCloseMenu}
            >
              <XIcon className="size-4" />
            </Button>
          ) : (
            <Button variant={"glass"} size={"icon-lg"} onClick={handleOpenMenu}>
              <MenuIcon className="size-4" />
            </Button>
          )}
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
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2 py-6"
          >
            {items
              .filter((item) => !item.hide)
              .map((item, index) => (
                <Link
                  href={item.path}
                  onClick={handleCloseMenu}
                  key={item.path}
                >
                  <DropdownMenuItem
                    pureStyle
                    className="font-title rtl:font-text outline-none! cursor-pointer md:text-2xl font-light text-center justify-center px-10 py-2"
                  >
                    {item.text}
                  </DropdownMenuItem>
                </Link>
              ))}
          </motion.div>
        </LiquidGlassCardWrapper>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const LandingMenu = () => {
  const { isOpen } = useStore(menuStore);
  const currentLocale = useLocale();
  const otherLocale: "fa" | "en" = currentLocale === "en" ? "fa" : "en";
  const pathname = usePathname();

  const { activeItem, parentItem } = useMenu();

  return (
    <>
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -50,
          y: isOpen ? 0 : 50,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 bottom-0 z-500"
      >
        <Image
          src={"/images/miner.png"}
          alt="hero"
          width={1200}
          height={800}
          className="w-[55vw] md:w-[28vw]"
        />
      </motion.div>

      <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 w-min">
        <div className="flex gap-5 justify-center rtl:flex-row-reverse items-center h-full">
          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.8 : 1,
              pointerEvents: isOpen ? "none" : "auto",
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <LiquidGlassBtnWrapper>
              <Button variant={"glass"} size={"icon-lg"} asChild>
                <Link href={pathname} locale={otherLocale}>
                  <LanguagesIcon className="size-4" />
                </Link>
              </Button>
            </LiquidGlassBtnWrapper>
          </motion.div>

          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.8 : 1,
              pointerEvents: isOpen ? "none" : "auto",
            }}
            transition={{
              duration: 0.3,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <LiquidGlassBtnWrapper>
              <Button
                variant={"glass"}
                className="font-medium font-text font-title rtl:font-text"
                size={"lg"}
              >
                {activeItem?.text || parentItem?.text}
              </Button>
            </LiquidGlassBtnWrapper>
          </motion.div>

          <LiquidGlassBtnWrapper>
            <Menu />
          </LiquidGlassBtnWrapper>
        </div>
      </div>
    </>
  );
};
