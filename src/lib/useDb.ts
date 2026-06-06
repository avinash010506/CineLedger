import { useSyncExternalStore } from "react";
import { globalDb, dbSubscribe } from "./db";

export function useDb() {
  return useSyncExternalStore(
    dbSubscribe,
    () => globalDb,
    () => globalDb,
  );
}
