import { useState } from "react";
import { useRecoilValue } from "recoil";

import * as S from "./Subway.style";
import AppBar from "../../../components/app-bar/AppBar";
import WideButton from "../../../components/wide-button/WideButton";
import { subwayState } from "../../../recoil/mountain";
import SubwayListButton from "../components/SubwayListButton";
import Top3 from "../components/Top3";

const SubwayListPage = () => {
  const subwayData = useRecoilValue(subwayState);

  const data = subwayData.slice();
  const topData = data.slice(0, 3);
  const middleData = data.slice(3, 5);
  const bottomData = data.slice(5, 10);

  const [openBottomData, setOpenBottomData] = useState(false);

  return (
    <S.MainWrapper>
      <AppBar />
      <p className="title">
        지하철 역에서 가까운 산 <span className="point">Top 10</span>
      </p>
      <Top3 data={topData} />
      <S.ListWrapper>
        {middleData.map((item, index) => {
          return <SubwayListButton idx={index + 3} name={item.name} />;
        })}
        {!openBottomData && (
          <WideButton
            type="fill"
            text="나머지 산 확인하기"
            onClick={() => setOpenBottomData(!openBottomData)}
          />
        )}
        {openBottomData && (
          <>
            {bottomData.map((item, index) => {
              return <SubwayListButton idx={index + 5} name={item.name} />;
            })}
          </>
        )}
      </S.ListWrapper>
    </S.MainWrapper>
  );
};
export default SubwayListPage;
