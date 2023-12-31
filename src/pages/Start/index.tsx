import { useEffect } from "react";
import { useResetRecoilState } from "recoil";

import { userLoginState, userState } from "../../recoil/user";

import * as S from "./Start.style";
import LoginButton from "./components/LoginButton";

const StartPage = () => {
  const userData = useResetRecoilState(userState);
  const loginData = useResetRecoilState(userLoginState);

  useEffect(() => {
    userData();
    loginData();
  }, [userData, loginData]);

  return (
    <S.StartContainer>
      <S.Subtitle>등산, 트래킹 할 곳을 찾을 때</S.Subtitle>
      <img className="logo" src="/assets/logo.png" alt="logo" />
      <LoginButton type="both" />
    </S.StartContainer>
  );
};

export default StartPage;
