import { useNavigate } from "react-router-dom";
import * as S from "./Start.style";

import RectangleButton from "../../components/RectangleButton";
import LoginButton from "./components/LoginButton";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <S.StartContainer>
      <S.Subtitle>등산, 트래킹 할 곳을 찾을 때</S.Subtitle>
      <S.Title>
        K<span className="green">GROUND</span>
      </S.Title>
      <S.Image src="/assets/image/img-mountain.png" alt="logo" />
      <S.Text>쾌적한 등산, 트레킹 추천 서비스</S.Text>
      <LoginButton />
      {/* <RectangleButton
        text="시작하기"
        color="blue100"
        onClick={() => navigate("/keyword")}
      /> */}
    </S.StartContainer>
  );
};

export default StartPage;
