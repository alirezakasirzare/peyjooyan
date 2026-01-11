"use client";

import { useMenuScroll } from "~/hooks/use-menu-scroll";

export const MenuScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useMenuScroll();

  return children;
};
