import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import CreatePage from "./admin/Create";
import RecommendListPage from "./pages/List/RecommendList";
import SubwayListPage from "./pages/List/SubwayList";
import KeywordPage from "./pages/Keyword";
import MyPage from "./pages/Mypage";

import { userLoginState } from "./recoil/user";
import { useRecoilState } from "recoil";
import SignUpPage from "./pages/SignUp";

const AppRouter = () => {
  const [userLogin, setUserLogin] = useRecoilState(userLoginState);
  console.log("userLogin", userLogin);

  return (
    <BrowserRouter>
      <Routes>
        {/* 비로그인 접근 가능 */}
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/list/recommendation" element={<RecommendListPage />} />
        <Route path="/list/subway" element={<SubwayListPage />} />
        <Route path="/keywords" element={<KeywordPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* 로그인 필요 */}
        <Route path="/mypage" element={<MyPage />} />

        {/* 관리자 페이지 */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
