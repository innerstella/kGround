import { useRecoilValue } from "recoil";
import { userLoginState } from "./recoil/user";
import { Outlet } from "react-router-dom";
import NonLoginPage from "./pages/Mypage/components/NonLogin";

const PrivateRouter = () => {
  const loginData = useRecoilValue(userLoginState);

  if (loginData.isLogin) {
    return <Outlet />;
  } else {
    return <NonLoginPage />;
  }
};

export default PrivateRouter;
