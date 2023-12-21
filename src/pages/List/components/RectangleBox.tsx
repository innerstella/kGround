import { useRecoilValue } from "recoil";
import { MountainData, mountainState } from "../../../recoil/mountain";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface RectangleBoxProps {
  name: string;
  idx: number;
}

const RectangleBox = ({ name, idx }: RectangleBoxProps) => {
  const navigate = useNavigate();
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<MountainData>();
  const moveToDetail = () => {
    if (data) {
      navigate(`/detail/${data.name}`);
    }
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
    </MainWrapper>
  );
};

export default RectangleBox;

const MainWrapper = styled.div<{ idx: number }>`
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

  width: 100%;
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
  }
`;
