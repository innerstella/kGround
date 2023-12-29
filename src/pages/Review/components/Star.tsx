import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { reviewState } from "../../../recoil/review";

const Star = () => {
  const [reviewData, setReviewData] = useRecoilState(reviewState);

  const [rateScore, setRateScore] = useState(0);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  const icList: { [key: string]: string } = {
    true: "on",
    false: "off",
  };

  const clickStar = (e: any) => {
    const starID = e.target.id;
    setRateScore(Number(starID));

    const funcList = [setStar1, setStar2, setStar3, setStar4, setStar5];

    for (let i = 0; i < 5; i++) {
      if (i < +starID) funcList[i](true);
      else funcList[i](false);
    }
  };

  useEffect(() => {
    setReviewData({ ...reviewData, reviewStar: rateScore });
  }, [rateScore]);

  return (
    <MainWrapper>
      <p className="text">여행지에 만족하셨나요?</p>
      <StarWrapper>
        <img
          onClick={(e) => clickStar(e)}
          className="star"
          src={`/assets/icon/ic-star-${icList[star1.toString()]}.svg`}
          alt="star"
          id="1"
        />
        <img
          onClick={(e) => clickStar(e)}
          className="star"
          src={`/assets/icon/ic-star-${icList[star2.toString()]}.svg`}
          alt="star"
          id="2"
        />
        <img
          onClick={(e) => clickStar(e)}
          className="star"
          src={`/assets/icon/ic-star-${icList[star3.toString()]}.svg`}
          alt="star"
          id="3"
        />
        <img
          onClick={(e) => clickStar(e)}
          className="star"
          src={`/assets/icon/ic-star-${icList[star4.toString()]}.svg`}
          alt="star"
          id="4"
        />
        <img
          onClick={(e) => clickStar(e)}
          className="star"
          src={`/assets/icon/ic-star-${icList[star5.toString()]}.svg`}
          alt="star"
          id="5"
        />
      </StarWrapper>
    </MainWrapper>
  );
};

export default Star;

const MainWrapper = styled.div`
  display: inline-flex;
  padding: 1rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  border-radius: 0.375rem;
  background: rgba(53, 183, 17, 0.1);

  margin-bottom: 1rem;

  .text {
    color: var(--Text-Color, #0e1513);
    text-align: center;

    /* Focus */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;
