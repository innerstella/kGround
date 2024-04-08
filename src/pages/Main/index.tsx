import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Recommendation from "./components/Recommendation";
import Subway from "./components/Subway";
import * as S from "./Main.style";
import Banner from "../../components/banner/Banner";
import GNB from "../../components/gnb/GNB";
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
