import { GlassCard } from "@developer-hub/liquid-glass";
import { cn } from "~/lib/utils";

export const LiquidGlassCardWrapper = ({
  children,
  className,
  padding,
  radius,
}: {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  radius?: number;
}) => {
  return (
    <GlassCard
      displacementScale={30}
      cornerRadius={radius}
      blurAmount={0.16}
      className={cn("border border-white/30", className)}
      padding={padding}
    >
      {children}
    </GlassCard>
  );
};
