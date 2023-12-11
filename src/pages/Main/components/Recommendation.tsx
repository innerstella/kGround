import * as S from "./Recommendation.style";

import mountainData from "../../../data/mountain.json";

import ImgButton from "../../../components/img-button/ImgButton";
import CircleButton from "../../../components/circle-button/CircleButton";

const Recommendation = () => {
  return (
    <S.MainWrapper>
      <S.Text>
        <span className="sub1">이번 달&nbsp;</span>
        <span className="sub2">추천</span>
        <span className="sub3">설경이 아름답고 안전한 트레킹 코스</span>
      </S.Text>
      <S.ButtonWrapper>
        <div className="gap">
          <ImgButton mountainName={"관악산"} mountainData={mountainData} />
          <ImgButton mountainName={"인왕산"} mountainData={mountainData} />
        </div>
        <CircleButton type="point" />
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Recommendation;
