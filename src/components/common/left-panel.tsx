import { cn } from "~/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

export const LeftPanel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "w-160 max-w-full pt-6 md:pt-10 pb-10 md:pb-0 flex flex-col max-h-screen relative z-50",
      className
    )}
  >
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
