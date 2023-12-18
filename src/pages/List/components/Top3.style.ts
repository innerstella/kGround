import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  .img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .title {
    color: #000;

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding: 0 !important;
  }
  .desc {
    color: var(--Text-Sub, #545454);
    text-align: center;

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */
  }
  .icon {
    position: relative;
    top: -3rem;
    margin-bottom: -3rem;
  }
`;
export const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FirstWrapper = styled.div`
  display: flex;
  width: 8.3125rem;
  padding: 1.25rem 0.5rem 0.875rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 0.375rem;
  border: 1px solid var(--Point-Color, #35b711);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);

  position: relative;
  z-index: 8;
`;

export const SecondWrapper = styled.div`
  display: flex;
  width: 8.3125rem;

  padding: 1.25rem 0.5rem 0.875rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 0.375rem;
  border: 1px solid var(--Point-Color, #35b711);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);

  position: relative;
  top: -6rem;
  left: -6rem;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  width: 8.3125rem;

  padding: 1.25rem 0.5rem 0.875rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 0.375rem;
  border: 1px solid var(--Point-Color, #35b711);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);

  position: relative;
  top: -17rem;
  left: 6rem;
`;
