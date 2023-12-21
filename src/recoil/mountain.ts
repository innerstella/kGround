import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface RecommendationData {
  desc: string;
  ranking: string[];
}

interface Diner {
  dinerAddress: string;
  dinerMenu: string;
  dinerName: string;
  dinerTime: number;
}

export interface MountainData {
  name: string;
  elevation: number;
  imgUrl: string;
  level: string;
  startAddress: string;
  subway: string;
  track: string;
  walkingDistance: number;
  walkingTime: number;
  diner: Diner[];
}

export const mountainState = atom<MountainData[]>({
  key: "mountainState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const recommendationState = atom<RecommendationData[]>({
  key: "recommendationState",
  default: [{ desc: "", ranking: [] }],
  effects_UNSTABLE: [persistAtom],
});

export const subwayState = atom<any[]>({
  key: "subwayState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
