import { useRecoilState } from "recoil";
import styled from "styled-components";
import { reviewState } from "../../../recoil/review";
import { useEffect, useState } from "react";

const Comment = () => {
  const [reviewData, setReviewData] = useRecoilState(reviewState);
  const [comment, setComment] = useState("");

  const changeComment = (e: any) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setReviewData({
      ...reviewData,
      reviewComment: comment,
    });
  }, [comment]);

  return (
    <MainWrapper>
      <p className="text">코멘트를 남겨주세요</p>
      <textarea className="input" onChange={(e) => changeComment(e)} />
    </MainWrapper>
  );
};

export default Comment;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;

  margin-top: 2rem;
  .text {
    color: var(--Text-Color, #0e1513);
    text-align: center;

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .input {
    display: flex;
    width: 20rem;
    height: 7.1875rem;
    padding: 0.75rem;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;

    border-radius: 0.375rem;
    background: #f0f0f0;

    white-space: pre-line;

    color: var(--Text-Color, #0e1513);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
`;
