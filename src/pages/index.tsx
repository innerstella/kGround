import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import RectangleButton from "../components/RectangleButton";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <img
        src="/assets/png/logo.png"
        alt="logo"
        className="logo prevent-copy"
      />
      <p className="logo-text">어디로 여행 갈까요?</p>
      <p className="info-text">목적 기반 여행정보 추천</p>
      <RectangleButton
        text="시작하기"
        color="blue100"
        onClick={() => navigate("/keyword")}
      />
    </MainBox>
  );
};

export default MainPage;

const MainBox = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: white;
  font-family: "SUIT", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 30vh;

  .logo {
    width: 13.5625rem;
    height: 4.25rem;
  }
  .logo-text {
    color: var(--black100, #000);
    font-family: SUIT Variable;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    padding-top: 0.5rem;
  }
  .info-text {
    color: var(--gray500, #686868);
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-top: 0.7rem;
  }
`;
