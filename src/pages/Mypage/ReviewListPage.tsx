import { useRecoilValue } from "recoil";
import AppBar from "../../components/app-bar/AppBar";
import * as A from "./WishListPage.style";
import { userState } from "../../recoil/user";
import GNB from "../../components/gnb/GNB";

const ReviewListPage = () => {
  const userData = useRecoilValue(userState);

  return (
    <A.MainWrapper>
      <AppBar />
      <A.NameWrapper>
        <p className="text-name">
          {userData.userName}
          <span className="text-sir">님의</span>
        </p>
        <p className="text-hello">리뷰 기록</p>
      </A.NameWrapper>
      <A.Divider />
      <GNB page="mypage" />
    </A.MainWrapper>
  );
};

export default ReviewListPage;
