import { useRecoilValue } from "recoil";

import WishList from "./components/WishList";
import * as S from "./WishListPage.style";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import { userState } from "../../recoil/user";

const WishListPage = () => {
  const userData = useRecoilValue(userState);

  return (
    <>
      <S.MainWrapper>
        <AppBar />
        <S.NameWrapper>
          <p className="text-name">
            {userData.userName}
            <span className="text-sir">님의</span>
          </p>
          <p className="text-hello">찜리스트</p>
        </S.NameWrapper>
      </S.MainWrapper>
      <S.Divider />
      <S.ListWrapper>
        <div className="box-num">
          <p className="text">총 {userData.userWishList.length}개</p>
        </div>
        {userData.userWishList.map((name) => {
          return <WishList mountainName={name} />;
        })}
        <GNB page="mypage" />
      </S.ListWrapper>
    </>
  );
};

export default WishListPage;
