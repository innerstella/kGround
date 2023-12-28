import { useLocation, useParams } from "react-router-dom";
import * as S from "./ReviewDetail.style";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import { useRecoilValue } from "recoil";
import { mountainState } from "../../recoil/mountain";
import getDateString from "../../utils/getDateString";
import { useEffect, useState } from "react";
import reviewJson from "../../data/review.json";
import ShowStar from "./components/ShowStar";
import TagButton from "../../components/tag-button/TagButton";

const ReviewDetailPage = () => {
  const location = useLocation();
  const reviewData = location.state.reviewData;

  const mountainData = useRecoilValue(mountainState);
  const mountainImg = mountainData.find(
    (elem) => elem.name === reviewData.reviewMountain
  )?.imgUrl;
  const date = getDateString(reviewData.reviewDate);
  const comment = reviewData.reviewComment;
  const [tagList, setTagList] = useState<any[]>();
  const [isTag, setIsTag] = useState(false);

  useEffect(() => {
    // 리뷰 태그 모으기
    const reviewWhenData: { [key: string]: string } = reviewJson.reviewWhen;
    const reviewWhoData: { [key: string]: string } = reviewJson.reviewWho;
    const reviewMoodData: { [key: string]: string } = reviewJson.reviewMood;
    const reviewETCData: { [key: string]: string } = reviewJson.reviewETC;

    if (reviewData) {
      const reviewWhenID = reviewData.reviewWhen;
      const reviewWhoID = reviewData.reviewWho;
      const reviewMoodIDList = reviewData.reviewMood;
      const reviewETCIDList = reviewData.reviewETC;

      let currTagList: string[] = [];

      reviewData.reviewWhen > 0 &&
        currTagList.push(reviewWhenData[reviewWhenID]);
      reviewData.reviewWho > 0 && currTagList.push(reviewWhoData[reviewWhoID]);
      reviewMoodIDList.length > 0 &&
        reviewMoodIDList.forEach((elem: number) => {
          currTagList.push(reviewMoodData[elem]);
        });
      reviewETCIDList.length > 0 &&
        reviewETCIDList.forEach((elem: number) => {
          currTagList.push(reviewETCData[elem]);
        });

      setTagList([...currTagList]);

      if (currTagList.length > 0) setIsTag(true);
    }
  }, []);
  return (
    <S.MainWrapper>
      <AppBar />
      <S.CardWrapper>
        <p className="mountainName">{reviewData.reviewMountain}</p>
        <div className="flex-col">
          <img
            className="mountainImg"
            src={mountainImg}
            alt={reviewData.reviewMountain}
          />
          <ShowStar reviewStar={reviewData.reviewStar} />
          <div className="flex-start">
            <p> {date}</p>
            <p>{comment}</p>
          </div>
        </div>
        <div className="flex-row">
          {tagList?.map((elem, idx) => {
            return <TagButton key={idx} text={elem} />;
          })}
        </div>
      </S.CardWrapper>
      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default ReviewDetailPage;
