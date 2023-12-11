import { atom } from "recoil";

export const mountainState = atom<any[]>({
  key: "mountainState",
  default: [],
});
