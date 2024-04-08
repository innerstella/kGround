import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { mountainState } from "../../recoil/mountain";

interface Props {
  mountainName: string;
}

interface MountainData {
  name: string;
  diner: any[];
}

const RestaurantButton = ({ mountainName }: Props) => {
  const navigate = useNavigate();
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<MountainData>();
  const moveToDetail = () => {
    if (data) {
      navigate(`/detail/${data.name}`);
    }
  };

  useEffect(() => {
    mountainData.forEach((item: any) => {
      if (item.name === mountainName) {
        setData(item);
      }
    });
  }, [mountainData, mountainName]);

  if (data) {
    return (
      <MainWrapper onClick={moveToDetail}>
        <div className="title">
          <span className="name">{mountainName}</span>
          <span className="num">{data.diner.length}+</span>
        </div>
        <div>
          {data.diner.slice(0, 3).map((restaurant, index) => (
            <p className="text" key={index}>
              {restaurant?.dinerName}
            </p>
          ))}
        </div>
      </MainWrapper>
    );
  } else {
    return (
      <MainWrapper>
        <Skeleton>
          <div className="skelton">sdfsdfs</div>
        </Skeleton>
      </MainWrapper>
    );
  }
};

export default RestaurantButton;

const MainWrapper = styled.div`
  .skelton {
    width: 6rem;
    height: 5rem;
  }
  display: flex;
  width: 8rem;
  padding: 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);
  background: #fff;

  .title {
    display: flex;
    gap: 0.3rem;
    align-items: end;
    .name {
      color: var(--Text-Color, #0e1513);

      /* Sub1 */
      font-family: Pretendard;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .num {
      color: var(--Point-Color, #35b711);
      text-align: center;

      /* Body3 */
      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */
    }
  }
  .text {
    color: var(--Text-Sub, #545454);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }
`;
