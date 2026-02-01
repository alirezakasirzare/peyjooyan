import { usePathname, useRouter } from "~/i18n/navigation";
import { useWheelTime } from "./use-wheel-time";
import { scrollStore } from "~/store/scroll-store";
import { findNextPrevPathname } from "./use-menu-keyboard-btn";
import { useMenu } from "./use-menu";

export const useMenuScroll = () => {
  const { items } = useMenu();
  const pathname = usePathname();
  const router = useRouter();

  useWheelTime((to) => {
    if (scrollStore.state.isMouseInScrollableView) return;
    const { prev, next } = findNextPrevPathname(items, pathname);

    if (to === "top" && prev) {
      router.push(prev);
    }

    if (to === "bottom" && next) {
      router.push(next);
    }
  });
};
