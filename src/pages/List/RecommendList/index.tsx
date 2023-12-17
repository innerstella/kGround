import { useRecoilValue } from "recoil";
import AppBar from "../../../components/app-bar/AppBar";
import { mountainState, recommendationState } from "../../../recoil/mountain";
import * as S from "./Recommend.style";
import { useEffect, useState } from "react";
import RectangleBox from "../components/RectangleBox";
import GNB from "../../../components/gnb/GNB";
import { monthState, weatherState } from "../../../recoil/system";

interface Data {
  imgUrl: string;
  name: string;
  desc: string;
}

const RecommendListPage = () => {
  const monthData = useRecoilValue(monthState);
  const weatherData = useRecoilValue(weatherState);
  const recommendData = useRecoilValue(recommendationState);
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    mountainData.forEach((item) => {
      if (item.name === recommendData[0].ranking[0]) {
        setData(item);
      }
    });
  }, [recommendData, mountainData]);

  return (
    <S.MainWrapper>
      <AppBar />
      <div className="gap3"></div>
      <p className="title">
        이번 달 <span className="point">추천</span>
      </p>
      <img className="img" src={data?.imgUrl} alt="img" />
      <p className="desc">{recommendData[0].desc}</p>
      <S.WeatherWrapper>
        <p className="text">평균 날씨 {weatherData}℃</p>
      </S.WeatherWrapper>
      <p className="title">
        {monthData}월의 <span className="point">Events</span>
      </p>
      {recommendData[0].ranking.map((item, idx) => {
        return <RectangleBox name={item} idx={idx} />;
      })}
      <GNB page="search" />
    </S.MainWrapper>
  );
};

export default RecommendListPage;
