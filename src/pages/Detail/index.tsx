import { useLocation } from "react-router-dom";
import * as S from "./Detail.style";
import AppBar from "../../components/app-bar/AppBar";
import Diner from "./components/Diner";
import ShareButton from "./components/ShareButton";
import WishButton from "./components/WishButton";

const DetailPage = () => {
  const location = useLocation();
  const mountainData = location.state.data;

  return (
    <S.MainWrapper>
      <AppBar />
      <S.ImgWrapper imgUrl={mountainData.imgUrl}>
        <p className="title">{mountainData.name}</p>
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
          <p className="desc">{mountainData.startAddress}</p>
        </div>
        <div className="btns-wrapper">
          <ShareButton />
          <WishButton />
        </div>
      </S.ImgWrapper>

      <S.Wrapper>
        <p className="focus">일반 정보</p>
        <div className="box1">
          <img src="/assets/svg/ic-flag.svg" alt="flag" />
          <p className="text">{mountainData.track}</p>
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
