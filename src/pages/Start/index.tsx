import * as S from "./Start.style";

import LoginButton from "./components/LoginButton";

const StartPage = () => {
  return (
    <S.StartContainer>
      <S.Subtitle>등산, 트래킹 할 곳을 찾을 때</S.Subtitle>
      <S.Title>
        K<span className="green">GROUND</span>
      </S.Title>
      <S.Image src="/assets/image/img-mountain.png" alt="logo" />
      <S.Text>쾌적한 등산, 트레킹 추천 서비스</S.Text>
      <LoginButton />
    </S.StartContainer>
  );
};

export default StartPage;
