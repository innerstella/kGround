import { useEffect } from "react";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import WideButton from "../../components/wide-button/WideButton";
import * as S from "./Mypage.style";
import Cheering from "./components/Cheering";
import Info from "../Review/components/Info";
import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserData, userLoginState, userState } from "../../recoil/user";
import { useNavigate } from "react-router-dom";
import NonLogin from "./components/NonLogin";

const MyPage = () => {
  const navigate = useNavigate();
  const cheeringText = "등산하는 나, 제법 멋져요:)";
  const [userData, setUserData] = useRecoilState(userState);
  const userLoginData = useRecoilValue(userLoginState);

  useEffect(() => {
    if (!userLoginData.isLogin) return;
    const uid = userLoginData.uid;

    const docRef = doc(dbService, "userData", uid);

    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setUserData(data as UserData);
          return data; // Return the document data if it exists
        } else {
          console.log("No such document!");
          return null; // Return null or handle the case when the document doesn't exist
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
        throw error; // Throw the error to be caught by the calling code
      });
  }, [setUserData, userLoginData.isLogin, userLoginData.uid]);

  return (
    <S.MainWrapper>
      <AppBar />
      {userLoginData.isLogin ? (
        <>
          <S.NameWrapper>
            <Cheering text={cheeringText} />
            <p className="text-name">
              {userData.userName}
              <span className="text-sir">님</span>
            </p>
            <p className="text-hello">안녕하세요!</p>
          </S.NameWrapper>
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
        <NonLogin />
      )}

      <GNB page="mypage" />
    </S.MainWrapper>
  );
};

export default MyPage;
