import * as auth from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import * as S from "./LoginButton.style";
import { dbService, signInGoogle } from "../../../firebase";
import { UserData, userLoginState, userState } from "../../../recoil/user";

interface LoginButtonProps {
  type: "google" | "both";
}

const LoginButton = ({ type }: LoginButtonProps) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useRecoilState(userLoginState);
  const [userData, setUserData] = useRecoilState(userState);

  const moveToMain = () => {
    setUserLogin({ isLogin: false, uid: "" });

    navigate("/main");
  };

  const signIn = async () => {
    const authentication = auth.getAuth();

    try {
      await signInGoogle();

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.LoginWrapper>
      {type === "google" && (
        <S.Login onClick={signIn}>
          <img src="/assets/icon/ic-google.svg" alt="google" className="svg" />
          <p className="text">구글 계정으로 시작하기</p>
        </S.Login>
      )}
      {type === "both" && (
        <>
          <S.Login onClick={signIn}>
            <img
              src="/assets/icon/ic-google.svg"
              alt="google"
              className="svg"
            />
            <p className="text">구글 계정으로 시작하기</p>
          </S.Login>
          <S.NonLogin onClick={moveToMain}>
            <p className="text">로그인 없이 시작하기</p>
          </S.NonLogin>
        </>
      )}
    </S.LoginWrapper>
  );
};

export default LoginButton;
