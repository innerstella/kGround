import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import SmallWideButton from "../../../components/wide-button/SmallWideButton";
import { MountainData, mountainState } from "../../../recoil/mountain";

interface WishListProps {
  mountainName: string;
}

const WishList = ({ mountainName }: WishListProps) => {
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<MountainData>();
  const navigate = useNavigate();

  useEffect(() => {
    mountainData.forEach((mountain) => {
      if (mountain.name === mountainName) {
        setData(mountain);
      }
    });
  }, [mountainData, mountainName]);

  const moveToDetail = () => {
    navigate(`/detail/${mountainName}`);
  };

  return (
    <MainWrapper onClick={moveToDetail}>
      {data ? (
        <>
          <span className="title">{mountainName}</span>
          <div className="flex-row">
            <img className="img" src={data.imgUrl} alt={mountainName} />
            <div className="flex-col">
              <p>고도 {data.elevation}m</p>
              <SmallWideButton type="fill" text="산 정보로 이동하기" />
            </div>
          </div>
        </>
      ) : (
        <Skeleton height="13rem" width="100%" />
      )}
    </MainWrapper>
  );
};

export default WishList;

const MainWrapper = styled.div`
  display: inline-flex;
  padding: 1rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  width: 100%;

  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.13);

  .title {
    color: var(--Main-Color, #043927);

    /* Focus */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .img {
    width: 6.25rem;
    height: 9.375rem;
    object-fit: cover;
    border-radius: 0.375rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 0.63rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    gap: 1rem;
  }
`;
