import { GlassCard } from "@developer-hub/liquid-glass";
import { cn } from "~/lib/utils";

export const LiquidGlassBtnWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <GlassCard
      displacementScale={10}
      cornerRadius={50}
      blurAmount={0.01}
      className={cn("glass-btn", className)}
    >
      {children}
    </GlassCard>
  );
};
