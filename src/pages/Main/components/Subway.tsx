import * as S from "./MainComponents.style";

import SubwayButton from "../../../components/subway-button/SubwayButton";
import CircleButton from "../../../components/circle-button/CircleButton";

const Subway = () => {
  return (
    <S.MainWrapper>
      <S.Text>
        <span className="sub1">지하철 역에서 가까운&nbsp;</span>
        <span className="sub2">산</span>
      </S.Text>
      <S.ButtonWrapper>
        <div className="gap">
          <SubwayButton type="first" mountainName="관악산" />
          <SubwayButton type="second" mountainName="인왕산" />
        </div>
        <CircleButton type="main" />
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Subway;
