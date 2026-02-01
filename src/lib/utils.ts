import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MenuItemShape } from "~/hooks/use-menu";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US").format(date);
}

export const findNextPrevPathname = (
  items: MenuItemShape[],
  pathname: string,
) => {
  let prevIndex: null | number = null;
  let nextIndex: null | number = null;

  items.forEach((item, i) => {
    if (item.path === pathname) {
      prevIndex = i - 1;
      nextIndex = i + 1;
    }
  });

  const prev = typeof prevIndex === "number" ? items[prevIndex] : null;
  const next = typeof nextIndex === "number" ? items[nextIndex] : null;

  return {
    prev: prev?.path || null,
    next: next?.path || null,
  };
};
