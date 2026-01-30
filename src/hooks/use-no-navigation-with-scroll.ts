import { scrollStore } from "~/store/scroll-store";

export const useNoNavigationWithScroll = () => {
  const handleEnter = () => {
    scrollStore.setState({
      isMouseInScrollableView: true,
    });
  };

  const handleLeave = () => {
    scrollStore.setState({
      isMouseInScrollableView: false,
    });
  };

  return {
    handleEnter,
    handleLeave,
  };
};
