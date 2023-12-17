import styled from "styled-components";

interface Props {
  type: "share" | "wishlist";
}

const SmallCircleButton = ({ type }: Props) => {
  return (
    <MainWrapper>
      {type === "share" && <img src="/assets/svg/ic-share.svg" alt="share" />}
      {type === "wishlist" && (
        <img src="/assets/svg/ic-wish.svg" alt="wishlist" />
      )}
    </MainWrapper>
  );
};

export default SmallCircleButton;

const MainWrapper = styled.div`
  border-radius: 50%;
  background: var(--white, #fff);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.38rem;
`;
