"use client";

import { ScrollArea } from "~/components/ui/scroll-area";
import { ArticleList } from "./article-list";
import { useNoNavigationWithScroll } from "~/hooks/use-no-navigation-with-scroll";

export const DesktopContent = () => {
  const { handleEnter, handleLeave } = useNoNavigationWithScroll();

  return (
    <div className="hidden lg:block px-20">
      <ScrollArea
        className="h-screen overflow-hidden"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        scrollBarClassName="w-0"
      >
        <div className="py-20">
          <ArticleList />
        </div>
      </ScrollArea>
      <div className="fixed left-0 right-0 bottom-0 h-[120px] bg-linear-to-t from-black/75 via-black/60 to-transparent" />
    </div>
  );
};
