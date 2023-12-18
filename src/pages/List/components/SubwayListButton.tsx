import { useRecoilValue } from "recoil";
import { mountainState } from "../../../recoil/mountain";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface RectangleBoxProps {
  name: string;
  idx: number;
}

interface Data {
  imgUrl: string;
  name: string;
  desc: string;
  subway: string;
  walkingDistance: number;
  walkingTime: number;
}

const SubwayListButton = ({ name, idx }: RectangleBoxProps) => {
  const navigate = useNavigate();
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<Data>();
  const moveToDetail = () => {
    navigate("/detail", { state: { data: data } });
  };

  useEffect(() => {
    mountainData.forEach((item) => {
      if (item.name === name) {
        setData(item);
      }
    });
  }, [name, mountainData]);

  return (
    <MainWrapper idx={idx} onClick={moveToDetail}>
      <div className="number">
        <p className="number-text">{idx + 1}</p>
      </div>
      <img className="img" src={data?.imgUrl} alt={name} />
      <p className="text">{name}</p>
      <div className="flex-col">
        <p className="subway-text">
          {data?.subway} {data?.walkingDistance}m
        </p>
        <div className="flex-row">
          <img className="ic" src="/assets/svg/ic-walk-green.svg" alt="walk" />
          <p className="walking-text">{data?.walkingTime}분</p>
        </div>
      </div>
    </MainWrapper>
  );
};

export default SubwayListButton;

const MainWrapper = styled.div<{ idx: number }>`
  .ic {
    width: 0.75rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.12rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  display: inline-flex;
  padding: 0.625rem 0rem 0.625rem 1rem;
  align-items: center;
  gap: 0.75rem;

  border-radius: 0.375rem;
  background: #fff;

  border: ${(props) => {
    if (props.idx === 0) {
      return "1px solid var(--Point-Color, #35b711);";
    }
    if (props.idx === 1 || props.idx === 2) {
      return "1px solid var(--Main-Color, #043927);";
    }
    return "1px solid var(--Line, #CECECE);";
  }};

  box-shadow: ${(props) => {
    if (props.idx === 0 || props.idx === 1 || props.idx === 2) {
      return "4px 4px 10px 0px rgba(0, 0, 0, 0.15);";
    }
  }};

  width: 100% !important;
  height: 3.75rem;

  .number {
    display: flex;
    width: 1.9375rem;
    height: 1.9375rem;
    padding: 0.3125rem 0.6875rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 6.25rem;
    background: ${(props) => {
      if (props.idx === 0) {
        return "var(--Point-Color, #35b711)";
      }
      if (props.idx === 1 || props.idx === 2) {
        return "var(--Main-Color, #043927)";
      }
    }};

    .number-text {
      color: ${(props) => {
        if (props.idx === 0 || props.idx === 1 || props.idx === 2) {
          return "#fff";
        }
        return "black";
      }};
      font-family: Pretendard;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding-top: 0.1rem;
      white-space: nowrap;
    }
  }
  .img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .text {
    color: #000;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 3rem;

    white-space: nowrap;
  }
  .subway-text {
    color: var(--Text-Sub, #545454);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
  .walking-text {
    color: var(--Point-Color, #35b711);

    /* Body3 */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
  }
`;
