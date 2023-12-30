import { useEffect, useState } from "react";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import WideButton from "../../components/wide-button/WideButton";
import * as S from "./Mypage.style";
import Cheering from "./components/Cheering";
import Info from "../Review/components/Info";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserData, userLoginState, userState } from "../../recoil/user";
import { useNavigate } from "react-router-dom";
import NonLogin from "./components/NonLogin";
import { mountainState } from "../../recoil/mountain";
import Loading from "../Keyword/components/Loading";
import NonLoginPage from "./components/NonLogin";

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

  const [mountainCnt, setMountainCnt] = useState(0);
  // const mountainData = useRecoilValue(mountainState);
  const [mountainElev, setMountainElev] = useState<number>(0);
  const [elevLoaded, setElevLoaded] = useState(false);

  useEffect(() => {
    // 산 개수, 총 높이 util 함수
    const reviewList = userData.userReviewList;

    if (reviewList.length === 0) {
      setElevLoaded(true);
      return;
    }
    setMountainCnt(reviewList.length);
    // 리뷰 가서 산 이름만 긁어오고, 산 데이터 가서 산 고도 긁어오기
    const getMountainCount = () => {
      const reviewList = userData.userReviewList;
      let totalHeight = 0;

      reviewList.forEach(async (elem) => {
        // elem : reviewDocID
        const docRef = doc(dbService, "reviewData", elem);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const name = docSnap.data().reviewMountain;
          console.log(mountainData);
          console.log(mountainData.filter((elem) => elem.name === name));
          // let elev;
          // if(name)
          const elev = mountainData.filter((elem) => elem.name === name)[0]
            .elevation;
          totalHeight += elev;
        }
        setMountainElev(totalHeight);
        setElevLoaded(true);
      });
    };
    getMountainCount();
  }, []);

  // 산 데이터
  const [mountainData, setMountainData] = useRecoilState(mountainState);

  useEffect(() => {
    const docRef = collection(dbService, "mountainData");
    getDocs(docRef)
      .then((querySnapshot) => {
        let data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setMountainData(data);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);

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
          <hr />
          <S.InfoWrapper>
            {elevLoaded ? (
              <p className="sub">
                지금까지 <span className="strong">{mountainCnt}개</span>의 산을
                완등했어요!
                <br />
                등반한 산의 총 높이는&nbsp;
                <span className="strong">{mountainElev}m</span>예요!
              </p>
            ) : (
              <Loading />
            )}
          </S.InfoWrapper>
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
