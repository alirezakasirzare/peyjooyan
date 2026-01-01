import { GlassCard } from "@developer-hub/liquid-glass";

export const LiquidGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlassCard
      displacementScale={30}
      cornerRadius={35}
      blurAmount={0.16}
      className="border border-white/30"
    >
      {children}
    </GlassCard>
  );
};
