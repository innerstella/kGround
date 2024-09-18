import { BrowserRouter, Route, Routes } from "react-router-dom"

import CreatePage from "./admin/Create"
import DetailPage from "./pages/Detail"
import RecommendListPage from "./pages/List/RecommendList"
import SubwayListPage from "./pages/List/SubwayList"
import MainPage from "./pages/Main"
import MyPage from "./pages/Mypage"
import WishListPage from "./pages/Mypage/WishListPage"
import ReviewDetailPage from "./pages/Review/ReviewDetail"
import ReivewFinishPage from "./pages/Review/ReviewFinish"
import ReviewListPage from "./pages/Review/ReviewListPage"
import ReviewWritePage from "./pages/Review/ReviewWritePage"
import SignUpPage from "./pages/SignUp"
import TermsOfDataPage from "./pages/SignUp/TermsOfData"
import TermsOfUsePage from "./pages/SignUp/TermsOfUse"
import PrivateRouter from "./PrivateRouter"
import KeywordPage from "./pages/Keyword"
import ResultPage from "./pages/Keyword/Result"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 진입 화면 */}
        {/* {userLogin.isLogin ? (
          <Route path="/" element={<MainPage />} />
        ) : (
          <Route path="/" element={<StartPage />} />
        )} */}

        {/* 회원가입 */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/termsofuse" element={<TermsOfUsePage />} />
        <Route path="/termsofdata" element={<TermsOfDataPage />} />

        {/* 비로그인 접근 가능 */}
        <Route path="/" element={<MainPage />} />
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
  )
}

export default AppRouter
