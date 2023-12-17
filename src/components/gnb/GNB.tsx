import { useNavigate } from "react-router-dom";
import * as S from "./GNB.style";

interface Props {
  page: "home" | "search" | "mypage";
}

const GNB = ({ page }: Props) => {
  const navigate = useNavigate();
  return (
    <S.MainWrapper>
      <S.WhiteWrapper>
        <S.Section $page={page === "home"} onClick={() => navigate("/main")}>
          {page === "home" ? (
            <>
              <img
                className="icon"
                src="/assets/svg/ic-home-on.svg"
                alt="home"
              />
              <p className="text-on">Home</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/svg/ic-home-off.svg"
                alt="home"
              />
              <p className="text-off">Home</p>
            </>
          )}
        </S.Section>
        <S.Section $page={page === "search"}>
          {page === "search" ? (
            <>
              <img
                className="icon"
                src="/assets/svg/ic-search-on.svg"
                alt="search"
              />
              <p className="text-on">Search</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/svg/ic-search-off.svg"
                alt="search"
              />
              <p className="text-off">Search</p>
            </>
          )}
        </S.Section>
        <S.Section $page={page === "mypage"}>
          {page === "mypage" ? (
            <>
              <img
                className="icon"
                src="/assets/svg/ic-mypage-on.svg"
                alt="wishlist"
              />
              <p className="text-on">Mypage</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/svg/ic-mypage-off.svg"
                alt="wishlist"
              />
              <p className="text-off">Mypage</p>
            </>
          )}
        </S.Section>
      </S.WhiteWrapper>
    </S.MainWrapper>
  );
};

export default GNB;