import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import LoginButton from "../../Start/components/LoginButton";
import GNB from "../../../components/gnb/GNB";
import AppBar from "../../../components/app-bar/AppBar";

import { mountainState } from "../../../recoil/mountain";
import loadMountainData from "../../../utils/load/loadMountainData";

const NonLoginPage = () => {
  const [mountainData, setMountainData] = useRecoilState(mountainState);

  useEffect(() => {
    loadMountainData().then((res) => setMountainData(res));
  }, []);

  return (
    <StartContainer>
      <AppBar />
      <Image src="/assets/image/img-mountain.png" alt="logo" />
      <Text>로그인이 필요한 페이지입니다</Text>
      <LoginButton type="google" />
      <GNB page="mypage" />
    </StartContainer>
  );
};

export default NonLoginPage;

export const StartContainer = styled.div`
  background-color: white;
  font-family: "SUIT", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 30vh;
`;

export const Subtitle = styled.p`
  color: #0e1513;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-bottom: 1.06rem;
`;

export const Title = styled.p`
  color: var(--Point-Color);
  text-align: center;
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  padding-bottom: 3.88rem;

  .green {
    color: var(--Main-Color);
    font-family: Pretendard;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const Image = styled.img`
  width: 7.3125rem;
  height: 6.375rem;
  flex-shrink: 0;

  padding-bottom: 1rem;
`;

export const Text = styled.p`
  color: var(--Text-Color, #0e1513);
  text-align: center;

  /* Sub1 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding-bottom: 3.88rem;
`;
