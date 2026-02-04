"use client";

import Image from "next/image";
import { RightPanel } from "~/components/common/right-panel";
import { useIsMobile } from "~/hooks/use-is-mobile";

export const DesktopImage = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  const isMobile = useIsMobile();

  return (
    <RightPanel isOpen={!isMobile}>
      <Image
        src={src}
        alt={title}
        width={300}
        height={600}
        className="w-full"
      />
    </RightPanel>
  );
};
