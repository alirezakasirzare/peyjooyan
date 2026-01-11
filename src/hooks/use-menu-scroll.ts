import { usePathname, useRouter } from "~/i18n/navigation";
import { useWheelTime } from "./use-wheel-time";
import { MenuItemShape, useMenu } from "./use-menu";

export const findNextPrevPathname = (
  items: MenuItemShape[],
  pathname: string
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

export const useMenuScroll = () => {
  const { items } = useMenu();
  const pathname = usePathname();
  const router = useRouter();

  useWheelTime((to) => {
    const { prev, next } = findNextPrevPathname(items, pathname);

    if (to === "top" && prev) {
      router.push(prev);
    }

    if (to === "bottom" && next) {
      router.push(next);
    }
  });
};
