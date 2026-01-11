export const CardSheet = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="pb-4">
      <div className="bg-[#1F2324] rounded-3xl p-4 text-[36px] leading-none card-bottom-sheet">
        {children}
      </div>
    </div>
  );
};
