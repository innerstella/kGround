import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import * as S from "./Recommend.style";
import AppBar from "../../../components/app-bar/AppBar";
import {
  MountainData,
  mountainState,
  recommendationState,
} from "../../../recoil/mountain";
import { monthState, weatherState } from "../../../recoil/system";
import getTemperature from "../../../utils/getTemperature";
import RectangleBox from "../components/RectangleBox";

const RecommendListPage = () => {
  const monthData = useRecoilValue(monthState);
  const [weatherData, setWeatherData] = useRecoilState(weatherState);
  const recommendData = useRecoilValue(recommendationState);
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<MountainData>();

  useEffect(() => {
    mountainData.forEach((item) => {
      if (item.name === recommendData[0].ranking[0]) {
        setData(item);
      }
    });
  }, [recommendData, mountainData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temperature = await getTemperature();
        setWeatherData(temperature);
      } catch (error) {
        console.error("Failed to fetch temperature:", error);
      }
    };

    fetchData();
  }, []);

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
    </S.MainWrapper>
  );
};

export default RecommendListPage;
