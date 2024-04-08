import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import TagButton from "../../../components/tag-button/TagButton";
import reviewJson from "../../../data/review.json";
import { mountainState } from "../../../recoil/mountain";
import { ReviewData } from "../../../recoil/review";
import getDateString from "../../../utils/getDateString";
import ShowStar from "../components/ShowStar";

interface ReviewListCardProps {
  reviewData: ReviewData;
  onClick: () => void;
}

const ReviewListCard = ({ reviewData, onClick }: ReviewListCardProps) => {
  const mountainData = useRecoilValue(mountainState);
  const mountainImg = mountainData.find(
    (elem) => elem.name === reviewData.reviewMountain
  )?.imgUrl;
  const date = getDateString(reviewData.reviewDate);
  const comment = reviewData.reviewComment.slice(0, 25) + "...";
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
    <MainWrapper isTag={isTag} onClick={onClick}>
      <p className="mountainName">{reviewData.reviewMountain}</p>
      <div className="flex-row">
        <img
          className="mountainImg"
          src={mountainImg}
          alt={reviewData.reviewMountain}
        />
        <div className="flex-col">
          <ShowStar reviewStar={reviewData.reviewStar} />
          <p> {date}</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="flex-col scroll">
        {tagList?.map((elem, idx) => {
          return <TagButton key={idx} text={elem} />;
        })}
      </div>
    </MainWrapper>
  );
};

export default ReviewListCard;

const MainWrapper = styled.div<{ isTag: boolean }>`
  width: 100%;
  height: ${(props) => (props.isTag ? "15rem" : "auto")};
  display: inline-flex;
  padding: 1.25rem 1rem 1.25rem 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.375rem;
  background: #f0f0f0;
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 0.44rem;
    flex-wrap: nowrap;
  }
  .scroll {
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .mountainName {
    color: var(--Main-Color, #043927);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mountainImg {
    width: 6.25rem;
    height: 6.25rem;
    object-fit: cover;
    border-radius: 0.625rem;
  }
  .mountainAddress {
    color: var(--Text-Sub, #545454);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
  .reviewComment {
    color: var(--Text-Sub, #545454);

    /* Body1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */
  }
`;
