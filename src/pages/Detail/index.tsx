import { useLocation } from "react-router-dom";
import * as S from "./Detail.style";
import AppBar from "../../components/app-bar/AppBar";
import Diner from "./components/Diner";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const DetailPage = () => {
  const location = useLocation();
  const mountainData = location.state.data;

  return (
    <S.MainWrapper>
      <AppBar />
      <img className="img" src={mountainData.imgUrl} alt={mountainData.name} />
      <S.Wrapper>
        <p className="focus">일반 정보</p>
        <div className="box1">
          <img src="/assets/svg/ic-pin.svg" alt="pin" />
          <p className="text">{mountainData.startAddress}</p>
        </div>
        <div className="box2">
          <div className="box2-1">
            <p className="sub2">고도</p>
            <S.Chip>
              <p className="sub2">{mountainData.elevation}m</p>
            </S.Chip>
          </div>
          <div className="box2-1">
            <p className="sub2">난이도</p>
            <S.Chip>
              <p className="sub2">{mountainData.level}</p>
            </S.Chip>
          </div>
        </div>
        <div className="box3">
          <p className="sub2">등산로 시작점</p>
          <p className="sub3">{mountainData.startAddress}</p>
        </div>
      </S.Wrapper>
      <hr />
      <S.Wrapper>
        <p className="focus">근처 맛집</p>
        <div className="box4">
          {mountainData.diner.map((restaurant: any, index: any) => (
            <Diner key={index} data={restaurant} />
          ))}
        </div>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default DetailPage;
