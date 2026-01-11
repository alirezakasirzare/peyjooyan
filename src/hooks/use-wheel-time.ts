import { useEffect, useRef } from "react";

type WheelTo = "top" | "bottom";

export const useWheelTime = (cb: (to: WheelTo) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | false>(false);
  const toRef = useRef<WheelTo>("bottom");

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      toRef.current = e.deltaY > 0 ? "bottom" : "top";
      if (timeoutRef.current !== false) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        cb(toRef.current);
        timeoutRef.current = false;
      }, 400);
    });
  }, [cb]);
};
