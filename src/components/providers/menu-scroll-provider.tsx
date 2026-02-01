"use client";

import { useMenuKeyboardBtn } from "~/hooks/use-menu-keyboard-btn";
import { useMenuScroll } from "~/hooks/use-menu-scroll";

export const MenuScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useMenuScroll();
  useMenuKeyboardBtn();

  return children;
};
