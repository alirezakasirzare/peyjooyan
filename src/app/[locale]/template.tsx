"use client";

import { useStore } from "@tanstack/react-store";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useMenu } from "~/hooks/use-menu";
import { usePathname } from "~/i18n/navigation";
import { NavigationStore } from "~/store/navigation-store";

export default function Template({ children }: { children: React.ReactNode }) {
  const { items } = useMenu();
  const pathname = usePathname();
  const { prevIndex } = useStore(NavigationStore);

  const currentIndex = items.findIndex((item) => item.path === pathname);
  const isForward = currentIndex >= prevIndex;

  useEffect(() => {
    if (currentIndex !== -1) {
      NavigationStore.setState({ prevIndex: currentIndex });
    }
  }, [currentIndex]);

  const yOffset = isForward ? 20 : -20;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
