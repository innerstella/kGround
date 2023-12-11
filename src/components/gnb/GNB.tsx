import * as S from "./GNB.style";

interface Props {
  page: "home" | "search" | "wishlist";
}

const GNB = ({ page }: Props) => {
  return (
    <S.MainWrapper>
      <S.WhiteWrapper>
        <S.Section $page={page === "home"}>
          <img className="icon" src="/assets/svg/ic-home.svg" alt="home" />
          <p className="text">Home</p>
        </S.Section>
        <S.Section $page={page === "search"}>
          <img className="icon" src="/assets/svg/ic-search.svg" alt="search" />
          <p className="text">Search</p>
        </S.Section>
        <S.Section $page={page === "wishlist"}>
          <img
            className="icon"
            src="/assets/svg/ic-wishlist.svg"
            alt="wishlist"
          />
          <p className="text">Mypage</p>
        </S.Section>
      </S.WhiteWrapper>
    </S.MainWrapper>
  );
};

export default GNB;
