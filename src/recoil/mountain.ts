import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface RecommendationData {
  desc: string;
  ranking: string[];
}

export const mountainState = atom<any[]>({
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
