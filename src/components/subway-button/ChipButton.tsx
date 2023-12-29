import styled from "styled-components";

const ChipButton = ({ walkingTime }: { walkingTime: number }) => {
  return (
    <MainWrapper>
      <div className="chipButton">
        <img className="img" src="/assets/icon/ic-walk-white.svg" alt="walk" />
        <p className="text">{walkingTime}분</p>
      </div>
    </MainWrapper>
  );
};

export default ChipButton;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  .sub1 {
    color: var(--white, #fff);

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sub2 {
    color: var(--white, #fff);
    text-align: center;

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
    width: 100%;

    white-space: pre-wrap;
  }

  .chipButton {
    display: flex;
    padding: 0.125rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;

    border-radius: 6.25rem;
    background: var(--Point-Color, #35b711);

    .img {
      width: 1rem;
      height: 1rem;
    }
    .text {
      color: var(--white, #fff);
      text-align: center;

      /* Body3 */
      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */

      padding-top: 0.1rem;
    }
  }
`;
