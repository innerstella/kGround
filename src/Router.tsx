import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userLoginState, userState } from "./recoil/user";

import StartPage from "./pages/Start";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import CreatePage from "./admin/Create";
import RecommendListPage from "./pages/List/RecommendList";
import SubwayListPage from "./pages/List/SubwayList";
import KeywordPage from "./pages/Keyword";
import MyPage from "./pages/Mypage";
import SignUpPage from "./pages/SignUp";
import WishListPage from "./pages/Mypage/WishListPage";

const AppRouter = () => {
  // recoil 상태값 확인
  const userLogin = useRecoilValue(userLoginState);
  const userData = useRecoilValue(userState);
  console.log("userData", userData);
  console.log("userLogin", userLogin);

  return (
    <BrowserRouter>
      <Routes>
        {/* 비로그인 접근 가능 */}
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/list/recommendation" element={<RecommendListPage />} />
        <Route path="/list/subway" element={<SubwayListPage />} />
        <Route path="/keywords" element={<KeywordPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* 로그인 필요 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/wishlist" element={<WishListPage />} />

        {/* 관리자 페이지 */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
