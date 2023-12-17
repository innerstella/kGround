import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const monthState = atom<number>({
  key: "monthState",
  default: new Date().getMonth() + 1,
  effects_UNSTABLE: [persistAtom],
});

export const weatherState = atom<number>({
  key: "weatherState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
