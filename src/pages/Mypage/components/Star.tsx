import styled from "styled-components";

const Star = () => {
  return (
    <MainWrapper>
      <p className="text">여행지에 만족하셨나요?</p>
      <StarWrapper>
        <img src="/assets/svg/ic-star-on.svg" alt="star" />
        <img src="/assets/svg/ic-star-on.svg" alt="star" />
        <img src="/assets/svg/ic-star-on.svg" alt="star" />
        <img src="/assets/svg/ic-star-on.svg" alt="star" />
        <img src="/assets/svg/ic-star-off.svg" alt="star" />
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
