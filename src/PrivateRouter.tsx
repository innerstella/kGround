import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

import NonLoginPage from "./pages/Mypage/components/NonLogin";
import { userLoginState } from "./recoil/user";

const PrivateRouter = () => {
  const loginData = useRecoilValue(userLoginState);

  if (loginData.isLogin) {
    return <Outlet />;
  } else {
    return <NonLoginPage />;
  }
};

export default PrivateRouter;
