import styled from "styled-components";

const WishButton = () => {
  const clickWish = () => {
    alert("찜하기 버튼 클릭");
  };

  return (
    <MainWrapper onClick={clickWish}>
      <img src="/assets/svg/ic-wish.svg" alt="wishlist" />
    </MainWrapper>
  );
};

export default WishButton;

const MainWrapper = styled.div`
  border-radius: 50%;
  background: var(--white, #fff);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.38rem;
`;
