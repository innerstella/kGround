import { useNavigate } from "react-router-dom";
import * as S from "./GNB.style";
import { useRecoilValue } from "recoil";
import { userLoginState } from "../../recoil/user";

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
                src="/assets/icon/ic-home-on.svg"
                alt="home"
              />
              <p className="text-on">Home</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/icon/ic-home-off.svg"
                alt="home"
              />
              <p className="text-off">Home</p>
            </>
          )}
        </S.Section>
        <S.Section
          $page={page === "search"}
          onClick={() => navigate("/keywords")}
        >
          {page === "search" ? (
            <>
              <img
                className="icon"
                src="/assets/icon/ic-search-on.svg"
                alt="search"
              />
              <p className="text-on">Search</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/icon/ic-search-off.svg"
                alt="search"
              />
              <p className="text-off">Search</p>
            </>
          )}
        </S.Section>
        <S.Section
          $page={page === "mypage"}
          onClick={() => navigate("/mypage")}
        >
          {page === "mypage" ? (
            <>
              <img
                className="icon"
                src="/assets/icon/ic-mypage-on.svg"
                alt="wishlist"
              />
              <p className="text-on">Mypage</p>
            </>
          ) : (
            <>
              <img
                className="icon off"
                src="/assets/icon/ic-mypage-off.svg"
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
