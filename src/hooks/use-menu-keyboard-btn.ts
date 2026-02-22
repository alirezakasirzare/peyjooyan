import { usePathname, useRouter } from "~/i18n/navigation";
import { MenuItemShape, useMenu } from "./use-menu";
import { useEffect } from "react";

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

export const useMenuKeyboardBtn = () => {
  const { items } = useMenu();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      const { prev, next } = findNextPrevPathname(items, pathname);

      if (e.code === "ArrowUp" && prev) {
        router.push(prev);
      }
      if (e.code === "ArrowDown" && next) {
        router.push(next);
      }
    };

    window.addEventListener("keyup", cb);

    return () => window.removeEventListener("keyup", cb);
  }, [pathname, items, router]);
};
