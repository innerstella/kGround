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
import TermsOfUsePage from "./pages/SignUp/TermsOfUse";
import TermsOfDataPage from "./pages/SignUp/TermsOfData";
import ResultPage from "./pages/Keyword/Result";
import ReviewWritePage from "./pages/Review/ReviewWritePage";
import ReviewListPage from "./pages/Review/ReviewListPage";
import ReivewFinishPage from "./pages/Review/ReviewFinish";
import ReviewDetailPage from "./pages/Review/ReviewDetail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  // recoil 상태값 확인
  const userLogin = useRecoilValue(userLoginState);
  const userData = useRecoilValue(userState);
  console.log("userData", userData);
  console.log("userLogin", userLogin);

  return (
    <BrowserRouter>
      <Routes>
        {/* 진입 화면 */}
        {userLogin.isLogin ? (
          <Route path="/" element={<MainPage />} />
        ) : (
          <Route path="/" element={<StartPage />} />
        )}

        {/* 회원가입 */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/termsofuse" element={<TermsOfUsePage />} />
        <Route path="/termsofdata" element={<TermsOfDataPage />} />

        {/* 비로그인 접근 가능 */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/list/recommendation" element={<RecommendListPage />} />
        <Route path="/list/subway" element={<SubwayListPage />} />
        <Route path="/keywords" element={<KeywordPage />} />
        <Route path="/result" element={<ResultPage />} />

        {/* 로그인 필요 */}
        <Route element={<PrivateRouter />}>
          <Route path="/mypage" element={<MyPage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/wishlist" element={<WishListPage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/review/new" element={<ReviewWritePage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/review/list" element={<ReviewListPage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/review/finish" element={<ReivewFinishPage />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/review/:id" element={<ReviewDetailPage />} />
        </Route>

        {/* 관리자 페이지 */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
