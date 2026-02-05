"use client";

import { useIsMobile } from "~/hooks/use-is-mobile";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { LiquidGlassCardWrapper } from "../sections/liquid-glass-card-wrapper";
import { ScrollArea } from "../ui/scroll-area";
import { useNoNavigationWithScroll } from "~/hooks/use-no-navigation-with-scroll";

export const RightPanel = ({
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
  if (isMobile) {
    return (
      <Sheet
        open={isOpen}
        onOpenChange={(e) => {
          if (e === false) onCloseMobile?.();
        }}
      >
        <SheetContent side="bottom" pureStyle className="translate-y-15">
          {/* for shadcn error throwing */}
          <SheetTitle className="hidden"></SheetTitle>
          {/* <ScrollArea
            className="h-[calc(80vh-50px)] overflow-hidden"
            scrollBarClassName="w-0"
          > */}
          <LiquidGlassCardWrapper
            // padding="40px 0 0 0"
            radius={50}
            padding="0 0 40px 0"
            className="border-0 shadow-sm shadow-white/30"
          >
            <div className="w-screen">{children}</div>
          </LiquidGlassCardWrapper>
          {/* </ScrollArea> */}
        </SheetContent>
      </Sheet>
    );
  }

  if (!isOpen) return null;

  return (
    <div
      className="w-110 max-w-full pt-6 md:pt-10"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};
