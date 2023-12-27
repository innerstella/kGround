import { useLocation } from "react-router-dom";
import AppBar from "../../components/app-bar/AppBar";
import * as S from "./ReviewWrite.style";
import Star from "./components/Star";
import WideButton from "../../components/wide-button/WideButton";
import Comment from "./components/Comment";
import GNB from "../../components/gnb/GNB";
import { useState } from "react";
import DetailReview from "./components/DetailReview";
import reviewData from "../../data/review.json";

const ReviewWritePage = () => {
  const location = useLocation();
  const mountainName = location.state.mountainName;
  const mountainImgUrl = location.state.mountainImgUrl;
  const [clickDetail, setClickDetail] = useState(false);

  return (
    <S.MainWrapper>
      <AppBar />
      <S.MountainWrapper>
        <p className="text">{mountainName}</p>
        <img className="img" src={mountainImgUrl} alt={mountainName} />
      </S.MountainWrapper>
      <Star />
      {!clickDetail ? (
        <WideButton
          text="상세 리뷰 입력하기"
          type="outline"
          onClick={() => setClickDetail(true)}
        />
      ) : (
        <>
          <DetailReview data={reviewData.reviewWhen} question="reviewWhen" />
          <DetailReview data={reviewData.reviewWho} question="reviewWho" />
          <DetailReview data={reviewData.reviewMood} question="reviewMood" />
          <DetailReview data={reviewData.reviewETC} question="reviewETC" />
        </>
      )}

      <Comment />
      <WideButton text="리뷰 등록하기" type="fill" />
      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default ReviewWritePage;
