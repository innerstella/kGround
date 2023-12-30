import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { doc, getDoc } from "firebase/firestore";

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
    signInGoogle().then((res: any) => {
      console.log(res);
      if (res.user) {
        setUserLogin({ isLogin: true, uid: res.user?.uid });
      }

      // userData 있는지 확인
      const docRef = doc(dbService, "userData", res.user?.uid);
      getDoc(docRef)
        .then((docSnapshot) => {
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

              // 로그인
              // navigate("/main");
            }
          } else {
            // 회원가입
            navigate("/signup", { state: { uid: res.user?.uid } });
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
          throw error; // Throw the error to be caught by the calling code
        });
    });
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
