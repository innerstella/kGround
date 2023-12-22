import styled from "styled-components";

export const MainWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 1rem; */
  height: 13rem;

  background-color: var(--Main-Color);
  width: 100%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
`;

export const TagWrapper = styled.div`
  border-radius: 0.625rem;
  background: #fff;

  width: 6rem;
  height: 1.6875rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    color: #000;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  padding-left: 0.2rem;
  .title {
    color: #fff;
    font-family: Pretandard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .desc {
    color: #fff;
    font-family: Pretandard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
  }
`;

export const ImgWrapper = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 2.6875rem 0rem 0rem 0rem;
`;

export const MoreWrapper = styled.div`
  border-bottom: 1px solid #a0b4ad;
  padding: 0.1rem;
  width: 3.25rem;
  margin-top: 1.5rem;
  .text {
    color: rgba(255, 255, 255, 0.62);
    text-align: center;
    font-family: Pretandard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    white-space: nowrap;
  }
`;
export const SkeletonWrapper = styled.div`
  width: 50vw;
`;
