import * as S from "./MainComponents.style";

import SubwayButton from "../../../components/subway-button/SubwayButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { mountainState, subwayState } from "../../../recoil/mountain";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Subway = () => {
  const navigate = useNavigate();
  const mountainData = useRecoilValue(mountainState);
  const [subwayData, setSubwayData] = useRecoilState(subwayState);

  useEffect(() => {
    if (mountainData.length > 0) {
      const tempData = mountainData.slice();
      const sortedSubway = tempData.sort((a, b) => {
        return a.walkingDistance - b.walkingDistance;
      });

      setSubwayData(sortedSubway);
    }
  }, [mountainData, setSubwayData]);

  return (
    <S.MainWrapper>
      <S.Text>
        <span className="sub1">지하철 역에서 가까운&nbsp;</span>
        <span className="sub2">산&nbsp;</span>
        <img
          onClick={() => {
            navigate("/list/subway");
          }}
          src="/assets/svg/ic-arrow-right.svg"
          alt="more"
        />
      </S.Text>
      <S.ButtonWrapper>
        <div className="gap">
          <SubwayButton type="first" mountainName="관악산" />
          {subwayData.slice(1).map((item, index) => {
            return (
              <SubwayButton
                key={index}
                type="second"
                mountainName={item.name}
              />
            );
          })}
        </div>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Subway;