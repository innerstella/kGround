import { atom } from "recoil";

interface RecommendationData {
  desc: string;
  ranking: string[];
}

export const mountainState = atom<any[]>({
  key: "mountainState",
  default: [],
});

export const recommendationState = atom<RecommendationData[]>({
  key: "recommendationState",
  default: [{ desc: "", ranking: [] }],
});

export const subwayState = atom<any[]>({
  key: "subwayState",
  default: [],
});
