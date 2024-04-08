import * as auth from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import LoginButton from "./components/LoginButton";
import * as S from "./Start.style";
import { dbService } from "../../firebase";
import { UserData, userLoginState, userState } from "../../recoil/user";

const StartPage = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useRecoilState(userLoginState);
  const [userData, setUserData] = useRecoilState(userState);

  useEffect(() => {
    const authentication = auth.getAuth();

    auth.onAuthStateChanged(authentication, async (user) => {
      if (user) {
        // 사용자 정보 가져오기 또는 로그인 처리
        setUserLogin({ isLogin: true, uid: user.uid });

        // userData 있는지 확인
        const docRef = doc(dbService, "userData", user.uid);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setUserData(data as UserData);

          if (data) {
            const loadData: UserData = {
              userName: data.userName,
              userGender: data.userGender,
              userBirth: data.userBirth,
              userWishList: data.userWishList,
              userReviewList: data.userReviewList,
            };

            setUserData(loadData);
            navigate("/main");
          }
        } else {
          // 회원가입
          navigate("/signup", { state: { uid: user.uid } });
        }
      }
    });
  }, []);

  return (
    <S.StartContainer>
      <S.Subtitle>등산, 트래킹 할 곳을 찾을 때</S.Subtitle>
      <img className="logo" src="/assets/logo.png" alt="logo" />
      <LoginButton type="both" />
    </S.StartContainer>
  );
};

export default StartPage;
