import { useEffect } from "react";
import { useRecoilState } from "recoil";

import * as S from "./Main.style";
import GNB from "../../components/gnb/GNB";
import Recommendation from "./components/Recommendation";
import Subway from "./components/Subway";
import Banner from "../../components/banner/Banner";

import { mountainState } from "../../recoil/mountain";
import loadMountainData from "../../utils/load/loadMountainData";

const MainPage = () => {
  const [mountainData, setMountainData] = useRecoilState(mountainState);

  useEffect(() => {
    loadMountainData().then((res) => setMountainData(res));
  }, []);

  return (
    <S.MainWrapper>
      <S.Logo src="/assets/logo.png" alt="logo" />
      <Recommendation />
      <Subway />
      <Banner />
      <GNB page="home" />
    </S.MainWrapper>
  );
};

export default MainPage;
