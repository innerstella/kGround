import styled from "styled-components";

export const MainWrapper = styled.div`
  position: fixed;
  bottom: 0.75rem;

  z-index: 10;

  display: flex;
  justify-content: center;
`;

export const WhiteWrapper = styled.div`
  display: inline-flex;
  padding: 0rem 0.875rem;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.25rem;

  width: 95vw;
  height: 4.5rem;

  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

interface SectionProps {
  $page: boolean;
}

const getButtonColor = ($page: boolean) => ($page ? "#35b711" : "none");

export const Section = styled.div<SectionProps>`
  cursor: pointer;

  border-top: 4px solid ${({ $page }) => getButtonColor($page)};
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  .off {
    margin-top: 4px;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .text-off {
    color: var(--Default, #969696);
    text-align: center;

    /* Sub2 */
    font-family: Pretendard, sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .text-on {
    color: var(--Main-Color, var(--Main-Color, #043927));

    /* Sub2 */
    font-family: Pretendard, sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
