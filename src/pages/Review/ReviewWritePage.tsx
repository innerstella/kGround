import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useToast } from "@chakra-ui/react";

import * as S from "./ReviewWrite.style";

import AppBar from "../../components/app-bar/AppBar";
import Star from "./components/Star";
import WideButton from "../../components/wide-button/WideButton";
import Comment from "./components/Comment";
import GNB from "../../components/gnb/GNB";
import DetailReview from "./components/DetailReview";

import { dbService } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import reviewJson from "../../data/review.json";

import { ReviewData, reviewState } from "../../recoil/review";
import { userLoginState, userState } from "../../recoil/user";

const ReviewWritePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const mountainName = location.state.mountainName;
  const mountainImgUrl = location.state.mountainImgUrl;

  const [clickDetail, setClickDetail] = useState(false);

  const loginData = useRecoilValue(userLoginState);
  const reviewData = useRecoilValue(reviewState);
  const userData = useRecoilValue(userState);
  const resetReviewData = useResetRecoilState(reviewState);

  const submitReview = async () => {
    const isStar = reviewData.reviewStar;

    if (isStar === 0) {
      // 토스트
      toast({
        title: "별점을 입력해주세요.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // 등록
    const today = new Date();
    const data: ReviewData = {
      reviewUID: loginData.uid,
      reviewMountain: mountainName,
      reviewDate: today.toString(),
      reviewStar: reviewData.reviewStar,
      reviewWhen: reviewData.reviewWhen,
      reviewWho: reviewData.reviewWho,
      reviewMood: reviewData.reviewMood,
      reviewETC: reviewData.reviewETC,
      reviewComment: reviewData.reviewComment,
    };

    // reviewData
    const reviewDoc = await addDoc(collection(dbService, "reviewData"), data);

    // userData
    const updateUserData = {
      ...userData,
      userReviewList: [...userData.userReviewList, reviewDoc.id],
    };
    setDoc(doc(dbService, "userData", loginData.uid), updateUserData);

    // 등록 완료 후 값 초기화 및 페이지 이동
    resetReviewData();
    navigate("/review/finish", { state: { reviewDocID: reviewDoc.id } });
  };

  // 페이지 새로고침 시 값 초기화
  useEffect(() => {
    resetReviewData();
  }, []);

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
          <DetailReview data={reviewJson.reviewWhen} question="reviewWhen" />
          <DetailReview data={reviewJson.reviewWho} question="reviewWho" />
          <DetailReview data={reviewJson.reviewMood} question="reviewMood" />
          <DetailReview data={reviewJson.reviewETC} question="reviewETC" />
        </>
      )}

      <Comment />
      <WideButton
        text="리뷰 등록하기"
        type="fill"
        onClick={() => submitReview()}
      />
      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default ReviewWritePage;
