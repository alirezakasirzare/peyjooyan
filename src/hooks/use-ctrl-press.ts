import { useEffect, useState } from "react";

export const useCtrlPress = () => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const downCb = (e: KeyboardEvent) => {
      if (e.code === "ControlLeft" || e.code === "ControlRight") {
        setIsPressed(true);
      }
    };

    const upCb = (e: KeyboardEvent) => {
      if (e.code === "ControlLeft" || e.code === "ControlRight") {
        setIsPressed(false);
      }
    };
    window.addEventListener("keydown", downCb);
    window.addEventListener("keyup", upCb);

    return () => {
      window.removeEventListener("keydown", downCb);
      window.removeEventListener("keyup", upCb);
    };
  }, []);

  return isPressed;
};
