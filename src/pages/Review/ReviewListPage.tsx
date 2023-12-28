import { useRecoilValue } from "recoil";
import AppBar from "../../components/app-bar/AppBar";
import * as A from "./ReviewList.style";
import { userState } from "../../recoil/user";
import GNB from "../../components/gnb/GNB";
import { mountainState } from "../../recoil/mountain";
import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { ReviewData } from "../../recoil/review";
import { useEffect, useState } from "react";
import ReviewListCard from "./components/ReviewListCard";
import Loading from "../Keyword/components/Loading";

const ReviewListPage = () => {
  const userData = useRecoilValue(userState);
  const mountainData = useRecoilValue(mountainState);

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
          {userReviewList?.map((elem) => {
            return <ReviewListCard reviewData={elem} />;
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
