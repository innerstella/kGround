import styled from "styled-components";

const Diner = ({ data }: any) => {
  return (
    <MainWrapper>
      <div className="title-box">
        <span className="name">
          {data.dinerName} : {data.dinerMenu}
        </span>
        <div className="flex-row">
          <img className="ic" src="/assets/icon/ic-walk-green.svg" alt="walk" />
          <span className="time">{data.dinerTime}분</span>
        </div>
      </div>
      <p className="address">{data.dinerAddress}</p>
    </MainWrapper>
  );
};

export default Diner;

const MainWrapper = styled.div`
  .ic {
    width: 0.75rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.625rem 5.625rem 0.625rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);
  background: #fff;

  .title-box {
    display: flex;
    gap: 0.75rem;
  }

  .name {
    color: var(--Main-Color, #043927);

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
  .time {
    color: var(--Point-Color, #35b711);

    /* Body2 */
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */

    white-space: nowrap;
    padding-top: 0.1rem;
  }
  .address {
    color: var(--Text-Sub, #545454);

    /* Body3 */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */

    white-space: nowrap;
  }
`;
