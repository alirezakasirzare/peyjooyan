"use client";

import { useIsMobile } from "~/hooks/use-is-mobile";
import { LiquidGlassCardWrapper } from "../sections/liquid-glass-card-wrapper";
import { useNoNavigationWithScroll } from "~/hooks/use-no-navigation-with-scroll";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { useHasMounted } from "~/hooks/use-has-mounted";

export const RightPopupCard = ({
  children,
  onCloseMobile,
  isOpen,
}: {
  children: React.ReactNode;
  onCloseMobile?: () => void;
  isOpen?: boolean;
}) => {
  const isMobile = useIsMobile();
  const { handleEnter, handleLeave } = useNoNavigationWithScroll();
  const mounted = useHasMounted();

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {isMobile ? (
            <div className="fixed inset-0 z-60">
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onCloseMobile}
                className="absolute inset-0 bg-black/50"
              />
              <motion.div
                key="mobile-panel"
                initial={{ y: "100%" }}
                animate={{ y: "3.75rem" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 w-full z-60"
              >
                <div
                  className="rounded-t-[40px] flex flex-col overflow-hidden bg-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={onCloseMobile}
                    className="h-[5px] w-13 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 cursor-pointer z-70"
                  />
                  <LiquidGlassCardWrapper
                    radius={50}
                    padding="0 0 40px 0"
                    className="border-0"
                  >
                    <div className="w-screen pb-10">{children}</div>
                  </LiquidGlassCardWrapper>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              key="right-popup"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-110 max-w-full fixed top-0 end-0 h-dvh z-50"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <LiquidGlassCardWrapper className="border-none" radius={0}>
                <div className="w-110 max-w-full h-dvh pt-6 md:pt-10">
                  {children}
                </div>
              </LiquidGlassCardWrapper>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
