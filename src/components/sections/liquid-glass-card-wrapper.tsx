import { GlassCard } from "@developer-hub/liquid-glass";
import { cn } from "~/lib/utils";

export const LiquidGlassCardWrapper = ({
  children,
  className,
  padding,
}: {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}) => {
  return (
    <GlassCard
      displacementScale={30}
      cornerRadius={35}
      blurAmount={0.16}
      className={cn("border border-white/30", className)}
      padding={padding}
    >
      {children}
    </GlassCard>
  );
};
