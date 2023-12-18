import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import WideButton from "../../components/wide-button/WideButton";
import * as S from "./Mypage.style";
import Cheering from "./components/Cheering";
import Info from "./components/Info";

const MyPage = () => {
  const userName = "김도영";
  const cheeringText = "등산하는 나, 제법 멋져요:)";
  return (
    <S.MainWrapper>
      <AppBar />
      <S.NameWrapper>
        <Cheering text={cheeringText} />
        <p className="text-name">
          {userName}
          <span className="text-sir">님</span>
        </p>
        <p className="text-hello">안녕하세요!</p>
      </S.NameWrapper>
      <WideButton type="outline" text="찜 리스트" />
      <Info />
      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default MyPage;
