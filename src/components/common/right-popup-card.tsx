"use client";

import { useIsMobile } from "~/hooks/use-is-mobile";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { LiquidGlassCardWrapper } from "../sections/liquid-glass-card-wrapper";

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
  if (isMobile) {
    return (
      <Sheet
        open={isOpen}
        onOpenChange={(e) => {
          if (e === false) onCloseMobile?.();
        }}
      >
        <SheetContent side="bottom" pureStyle>
          {/* for shadcn error throwing */}
          <SheetTitle className="hidden"></SheetTitle>
          <LiquidGlassCardWrapper
          // padding="40px 0 0 0"
          >
            {children}
          </LiquidGlassCardWrapper>
        </SheetContent>
      </Sheet>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="w-110 max-w-full fixed top-0 end-0 h-screen z-50">
      <LiquidGlassCardWrapper className="border-none" radius={0}>
        <div className="w-110 max-w-full h-screen p-6 md:p-10">{children}</div>
      </LiquidGlassCardWrapper>
    </div>
  );
};
