import * as S from "./LoginButton.style";

const LoginButton = () => {
  return (
    <S.LoginWrapper>
      <S.Login>
        <img src="/assets/svg/ic-google.svg" alt="google" className="svg" />
        <p className="text">구글 계정으로 시작하기</p>
      </S.Login>
      <S.NonLogin>
        <p className="text">로그인 없이 시작하기</p>
      </S.NonLogin>
    </S.LoginWrapper>
  );
};

export default LoginButton;
