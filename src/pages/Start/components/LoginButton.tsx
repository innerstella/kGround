import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import * as S from "./LoginButton.style";
import { signInGoogle } from "../../../firebase";
import { userLoginState } from "../../../recoil/user";

interface LoginButtonProps {
  type: "google" | "both";
}

const LoginButton = ({ type }: LoginButtonProps) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useRecoilState(userLoginState);

  const moveToMain = () => {
    setUserLogin({ isLogin: false, uid: "" });
    navigate("/main");
  };

  const handleGoogle = async () => {
    await signInGoogle().then((res: any) => {
      if (res === null) return;
      setUserLogin({ isLogin: true, uid: res.uid });
      navigate("/main");
    });
  };

  return (
    <S.LoginWrapper>
      {type === "google" && (
        <S.Login onClick={handleGoogle}>
          <img src="/assets/icon/ic-google.svg" alt="google" className="svg" />
          <p className="text">구글 계정으로 시작하기</p>
        </S.Login>
      )}
      {type === "both" && (
        <>
          <S.Login onClick={handleGoogle}>
            <img
              src="/assets/icon/ic-google.svg"
              alt="google"
              className="svg"
            />
            <p className="text">구글 계정으로 시작하기</p>
          </S.Login>
          <S.NonLogin onClick={moveToMain}>
            <p className="text">로그인 없이 시작하기</p>
          </S.NonLogin>
        </>
      )}
    </S.LoginWrapper>
  );
};

export default LoginButton;
