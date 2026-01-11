import { cn } from "~/lib/utils";

export const CardSheet = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className="pb-4">
      <div
        className={cn(
          "bg-[#1F2324] rounded-3xl p-4 text-[36px] leading-none card-bottom-sheet",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
