import { GlassCard } from "@developer-hub/liquid-glass";

export const LiquidGlassBtnWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GlassCard
      displacementScale={10}
      cornerRadius={50}
      blurAmount={0.01}
      className="glass-btn"
    >
      {children}
    </GlassCard>
  );
};
