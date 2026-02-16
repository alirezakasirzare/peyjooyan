import { Store } from "@tanstack/react-store";

export const MineralsStore = new Store({
  step: 0 as 0 | 1 | 2,
  activeStepIndex: 0,
});
