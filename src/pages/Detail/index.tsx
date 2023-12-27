import { useLocation, useParams } from "react-router-dom";
import * as S from "./Detail.style";
import AppBar from "../../components/app-bar/AppBar";
import Diner from "./components/Diner";
import ShareButton from "./components/ShareButton";
import WishButton from "./components/WishButton";
import { useRecoilValue } from "recoil";
import { MountainData, mountainState } from "../../recoil/mountain";
import { useEffect, useState } from "react";
import ReviewButton from "./components/ReviewButton";

const DetailPage = () => {
  const mountainData = useRecoilValue(mountainState);
  const [data, setData] = useState<MountainData>();
  const { id } = useParams();

  useEffect(() => {
    mountainData.forEach((mountain) => {
      if (mountain.name === id) {
        setData(mountain);
      }
    });
  }, [mountainData, id]);

  if (data) {
    return (
      <S.MainWrapper>
        <AppBar />
        <S.ImgWrapper imgUrl={data.imgUrl}>
          <p className="title">{data.name}</p>
          <div className="desc-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.00016 1.33337C5.42016 1.33337 3.3335 3.42004 3.3335 6.00004C3.3335 9.50004 8.00016 14.6667 8.00016 14.6667C8.00016 14.6667 12.6668 9.50004 12.6668 6.00004C12.6668 3.42004 10.5802 1.33337 8.00016 1.33337ZM8.00016 7.66671C7.08016 7.66671 6.3335 6.92004 6.3335 6.00004C6.3335 5.08004 7.08016 4.33337 8.00016 4.33337C8.92016 4.33337 9.66683 5.08004 9.66683 6.00004C9.66683 6.92004 8.92016 7.66671 8.00016 7.66671Z"
                fill="#DBDBDB"
              />
            </svg>
            <p className="desc">{data.startAddress}</p>
          </div>
          <div className="btns-wrapper">
            <ShareButton />
            <WishButton mountainName={data.name} />
            <ReviewButton
              mountainName={data.name}
              mountainImgUrl={data.imgUrl}
            />
          </div>
        </S.ImgWrapper>

        <S.Wrapper>
          <p className="focus">일반 정보</p>
          <div className="box1">
            <img src="/assets/svg/ic-flag.svg" alt="flag" />
            <p className="text">{data.track}</p>
          </div>
          <div className="box2">
            <div className="box2-1">
              <p className="sub2">고도</p>
              <S.Chip>
                <p className="sub2">{data.elevation}m</p>
              </S.Chip>
            </div>
            <div className="box2-1">
              <p className="sub2">난이도</p>
              <S.Chip>
                <p className="sub2">{data.level}</p>
              </S.Chip>
            </div>
          </div>
          <div className="box3">
            <p className="sub2">등산로 시작점</p>
            <p className="sub3">{data.startAddress}</p>
          </div>
        </S.Wrapper>
        <hr />
        <S.Wrapper>
          <p className="focus">근처 맛집</p>
          <div className="box4">
            {data.diner.map((restaurant: any, index: any) => (
              <Diner key={index} data={restaurant} />
            ))}
          </div>
        </S.Wrapper>
      </S.MainWrapper>
    );
  }

  return null;
};

export default DetailPage;
