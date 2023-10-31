import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages";
import KeywordPage from "./pages/keyword";
import ResultPage from "./pages/result";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/keyword" element={<KeywordPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;