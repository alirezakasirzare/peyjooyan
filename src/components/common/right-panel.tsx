export const RightPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-110 max-w-full pt-6 md:pt-10">
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};
