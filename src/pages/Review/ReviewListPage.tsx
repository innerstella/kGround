import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import ReviewListCard from "./components/ReviewListCard";
import * as A from "./ReviewList.style";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import { dbService } from "../../firebase";
import { ReviewData } from "../../recoil/review";
import { userState } from "../../recoil/user";
import Loading from "../Keyword/components/Loading";

const ReviewListPage = () => {
  const userData = useRecoilValue(userState);
  const navigate = useNavigate();

  const [userReviewList, setUserReviewList] = useState<ReviewData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 리뷰 가져오기
  const reviewList = userData.userReviewList;

  useEffect(() => {
    let arr: ReviewData[] = [];
    reviewList.forEach(async (elem) => {
      const docRef = doc(dbService, "reviewData", elem);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as ReviewData;
        if (data) {
          arr.push(data);
        }
      }
      setUserReviewList([...arr]);
      setIsLoaded(true);
    });
  }, []);

  return (
    <A.MainWrapper>
      <AppBar />
      <A.NameWrapper>
        <p className="text-name">
          {userData.userName}
          <span className="text-sir">님의</span>
        </p>
        <p className="text-hello">리뷰 기록</p>
      </A.NameWrapper>
      <A.Divider />
      {isLoaded ? (
        <>
          {userReviewList?.map((elem, idx) => {
            return (
              <ReviewListCard
                reviewData={elem}
                onClick={() =>
                  navigate(`/review/${reviewList[idx]}`, {
                    state: { reviewData: elem },
                  })
                }
              />
            );
          })}
        </>
      ) : (
        <A.LoadingBox>
          <Loading />
        </A.LoadingBox>
      )}

      <GNB page="mypage" />
    </A.MainWrapper>
  );
};

export default ReviewListPage;
