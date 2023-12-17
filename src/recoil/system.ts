import { atom } from "recoil";

export const monthState = atom<number>({
  key: "monthState",
  default: new Date().getMonth() + 1,
});

export const weatherState = atom<number>({
  key: "weatherState",
  default: 0,
});
