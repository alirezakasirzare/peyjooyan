import { ScrollArea } from "../ui/scroll-area";

export const LeftPanel = ({ children }: { children: React.ReactNode }) => (
  <div className="w-160 max-w-full py-6 md:py-10 flex flex-col h-screen">
    {children}
  </div>
);

export const LeftPanelHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="px-6 md:px-10 pb-4">{children}</div>;
};

export const LeftPanelContent = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ScrollArea
    type="hover"
    className="grow overflow-hidden"
    scrollBarClassName="w-0"
  >
    <div className="px-6 md:px-10 relative">{children}</div>
  </ScrollArea>
);
