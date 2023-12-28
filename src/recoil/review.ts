import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface ReviewData {
  reviewUID: string;
  reviewDate: string;
  reviewMountain: string;
  reviewStar: number;
  reviewWhen: number;
  reviewWho: number;
  reviewMood: number[];
  reviewETC: number[];
  reviewComment: string;
}

export const reviewState = atom<ReviewData>({
  key: "reviewState",
  default: {
    reviewUID: "",
    reviewDate: "",
    reviewMountain: "",
    reviewStar: 0,
    reviewWhen: 0,
    reviewWho: 0,
    reviewMood: [],
    reviewETC: [],
    reviewComment: "",
  },
  effects_UNSTABLE: [persistAtom],
});
