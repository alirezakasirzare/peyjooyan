import { useEffect, useRef } from "react";

type WheelTo = "top" | "bottom";

export const useWheelTime = (cb: (to: WheelTo) => void) => {
  const accumulatedDelta = useRef(0);
  const locked = useRef(false);

  const THRESHOLD = 120; // sensitivity

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (locked.current) return;

      accumulatedDelta.current += e.deltaY;

      // scroll to bottom
      if (accumulatedDelta.current >= THRESHOLD) {
        locked.current = true;
        cb("bottom");
        reset();
      }

      // scroll to top
      if (accumulatedDelta.current <= -THRESHOLD) {
        locked.current = true;
        cb("top");
        reset();
      }
    };

    const reset = () => {
      accumulatedDelta.current = 0;

      setTimeout(() => {
        locked.current = false;
      }, 1000); // lock time
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [cb]);
};
