export const PanelContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-row justify-between">{children}</div>
  );
};
