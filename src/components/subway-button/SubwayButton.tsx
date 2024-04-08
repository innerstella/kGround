import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { mountainState } from "../../recoil/mountain";

interface Props {
  type: "first" | "second";
  mountainName: string;
}

interface MountainData {
  name: string;
  subway: string;
  walkingTime: number;
  walkingDistance: number;
}

const SubwayButton = ({ type, mountainName }: Props) => {
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
    if (type === "first") {
      return (
        <FirstWapper onClick={moveToDetail}>
          <p className="sub1">{data.name}</p>
          <p className="sub2">
            {data.subway}에서
            <br />
            {data.walkingDistance}m
          </p>
          <div className="chipButton">
            <img
              className="img"
              src="/assets/icon/ic-walk-white.svg"
              alt="walk"
            />
            <p className="text">{data.walkingTime}분</p>
          </div>
        </FirstWapper>
      );
    }

    if (type === "second") {
      return (
        <SecondWrapper onClick={moveToDetail}>
          <p className="sub1">{data.name}</p>
          <p className="sub2">
            {data.subway}에서
            <br />
            {data.walkingDistance}m
          </p>
          <div className="chipButton">
            <img
              className="img"
              src="/assets/icon/ic-walk-green.svg"
              alt="walk"
            />
            <p className="text">{data.walkingTime}분</p>
          </div>
        </SecondWrapper>
      );
    }
  } else {
    return (
      <>
        <FirstWapper>
          <Skeleton>
            <div className="skleton">sdfsdfs</div>
          </Skeleton>
        </FirstWapper>
        <FirstWapper>
          <Skeleton>
            <div className="skleton">sdfsdfs</div>
          </Skeleton>
        </FirstWapper>
        <FirstWapper>
          <Skeleton>
            <div className="skleton">sdfsdfs</div>
          </Skeleton>
        </FirstWapper>
      </>
    );
  }

  return null;
};

export default SubwayButton;

const FirstWapper = styled.div`
  cursor: pointer;
  .skleton {
    width: 6rem;
    height: 6rem;
  }
  display: flex;
  width: 7.5625rem;
  padding: 1rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);
  .sub1 {
    color: var(--Text-Color, #0e1513);

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub2 {
    color: var(--Text-Sub, #545454);
    text-align: center;

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
    width: 100%;

    white-space: pre-wrap;
  }

  .chipButton {
    display: flex;
    padding: 0.125rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;

    border-radius: 6.25rem;
    background: var(--Point-Color, #35b711);

    .img {
      width: 1rem;
      height: 1rem;
    }
    .text {
      color: var(--white, #fff);
      text-align: center;

      /* Body3 */
      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */

      padding-top: 0.1rem;
    }
  }
`;

const SecondWrapper = styled.div`
  cursor: pointer;

  display: flex;
  width: 7.5625rem;
  padding: 1rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  background: var(--Main-Color, #043927);
  .sub1 {
    color: var(--white, #fff);

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub2 {
    color: var(--white, #fff);
    text-align: center;

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
    width: 100%;

    white-space: pre-wrap;
  }

  .chipButton {
    display: flex;
    padding: 0.125rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;

    border-radius: 6.25rem;
    background: white;
    .img {
      width: 1rem;
      height: 1rem;
    }
    .text {
      color: var(--Point-Color, #35b711);
      text-align: center;

      /* Body3 */
      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */

      padding-top: 0.1rem;
    }
  }
`;
