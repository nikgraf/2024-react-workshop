import { useSyncExternalStore } from "react";

const callback = (onScrollChange: () => void) => {
  window.addEventListener("scroll", onScrollChange);
  return () => {
    window.removeEventListener("scroll", onScrollChange);
  };
};
const getSnapshot = () => window.scrollY;
const getSnapshotServer = () => NaN;

export function useYScroll() {
  return useSyncExternalStore(callback, getSnapshot, getSnapshotServer);
}
