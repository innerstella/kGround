import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface UserData {
  userName: string;
  userGender: 1 | 2;
  userBirth: number;
  userWishList: string[];
  userReviewList: string[];
}

export const userState = atom<UserData>({
  key: "userState",
  default: {
    userName: "",
    userGender: 1,
    userBirth: 0,
    userWishList: [],
    userReviewList: [],
  },

  effects_UNSTABLE: [persistAtom],
});

export interface UserLoginData {
  isLogin: boolean;
  uid: string;
}

export const userLoginState = atom<UserLoginData>({
  key: "userLoginState",
  default: {
    isLogin: false,
    uid: "",
  },
  effects_UNSTABLE: [persistAtom],
});
