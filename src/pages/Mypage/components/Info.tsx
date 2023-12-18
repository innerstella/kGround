import styled from "styled-components";

const Info = () => {
  return (
    <MainWrapper>
      <p className="title">앱 정보</p>
      <p className="text">이용 약관</p>
      <p className="text">개인정보 처리방침</p>
    </MainWrapper>
  );
};
export default Info;

const MainWrapper = styled.div`
  position: fixed;
  bottom: 9rem;

  display: inline-flex;
  padding: 0.75rem 15.9375rem 0.75rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  .title {
    color: var(--Text-Color, #0e1513);

    /* Focus */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
  .text {
    color: var(--Text-Sub, #545454);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */

    white-space: nowrap;
  }
`;
