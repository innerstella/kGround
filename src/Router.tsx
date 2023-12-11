import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import KeywordPage from "./pages/keyword";
import ResultPage from "./pages/result";
import CreatePage from "./admin/Create";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />

        <Route path="/create" element={<CreatePage />} />

        {/* <Route path="/keyword" element={<KeywordPage />} />
        <Route path="/result" element={<ResultPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
