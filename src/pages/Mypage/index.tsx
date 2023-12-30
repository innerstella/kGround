import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import * as S from "./Mypage.style";

import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import WideButton from "../../components/wide-button/WideButton";
import Cheering from "./components/Cheering";
import Info from "../Review/components/Info";
import NonLoginPage from "./components/NonLogin";
import Loading from "../Keyword/components/Loading";

import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { UserData, userLoginState, userState } from "../../recoil/user";
import { mountainState } from "../../recoil/mountain";
import loadMountainData from "../../utils/load/loadMountainData";
import loadUserData from "../../utils/load/loadUserData";
import { Skeleton } from "@chakra-ui/react";

const cheeringText = "등산하는 나, 제법 멋져요:)";

const MyPage = () => {
  const navigate = useNavigate();

  // recoil
  const [userData, setUserData] = useRecoilState(userState);
  const userLoginData = useRecoilValue(userLoginState);
  const [mountainData, setMountainData] = useRecoilState(mountainState);

  // state
  const [mountainCnt, setMountainCnt] = useState(0);
  const [mountainElev, setMountainElev] = useState<number>(0);
  const [elevLoaded, setElevLoaded] = useState(false);

  // func : 산 개수, 높이 계산
  const getMountainCount = (data: UserData) => {
    const reviewList = data.userReviewList;
    let totalHeight = 0;

    setMountainCnt(reviewList.length);

    reviewList.forEach(async (elem) => {
      const docRef = doc(dbService, "reviewData", elem);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const name = docSnap.data().reviewMountain;
        const data = mountainData.filter((elem) => elem.name === name)[0];

        if (data.elevation !== undefined) {
          totalHeight += data.elevation;
        }
      }
      setMountainElev(totalHeight);
      setElevLoaded(true);
    });
  };

  // func : 유저 데이터 로드
  useEffect(() => {
    if (!userLoginData.isLogin) return;

    const uid = userLoginData.uid;

    loadUserData(uid).then((data) => {
      setUserData(data as UserData);
      loadMountainData().then((res) => {
        getMountainCount(data as UserData);
        setMountainData(res);
      });
    });
  }, [setUserData, userLoginData.isLogin, userLoginData.uid]);

  return (
    <S.MainWrapper>
      <AppBar />
      {userLoginData.isLogin ? (
        <>
          <Cheering text={cheeringText} />
          <Skeleton
            width="100%"
            isLoaded={elevLoaded && userData.userName.length > 0}
          >
            <div className="name-info">
              <S.NameWrapper>
                <p className="text-name">
                  {userData.userName}
                  <span className="text-sir">님</span>
                </p>
                <p className="text-hello">안녕하세요!</p>
              </S.NameWrapper>
              <S.InfoWrapper>
                <p className="sub">
                  지금까지 <span className="strong">{mountainCnt}개</span>의
                  산을 완등했어요!
                  <br />
                  등반한 산의 총 높이는&nbsp;
                  <span className="strong">{mountainElev}m</span>예요!
                </p>
              </S.InfoWrapper>
            </div>
          </Skeleton>

          <WideButton
            onClick={() => navigate("/wishlist")}
            type="outline"
            text="찜 리스트"
          />
          <WideButton
            onClick={() => navigate("/review/list")}
            type="outline"
            text="리뷰 기록"
          />
          <Info />
        </>
      ) : (
        <NonLoginPage />
      )}

      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default MyPage;
