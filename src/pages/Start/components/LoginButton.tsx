import { useNavigate } from "react-router-dom";
import * as S from "./LoginButton.style";
import { dbService, signInGoogle } from "../../../firebase";
import { useRecoilState } from "recoil";
import { UserData, userLoginState, userState } from "../../../recoil/user";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const LoginButton = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/main");
  };

  const [userLogin, setUserLogin] = useRecoilState(userLoginState);
  const [userData, setUserData] = useRecoilState(userState);

  const signIn = async () => {
    signInGoogle().then((res: any) => {
      if (res.user) {
        setUserLogin({ isLogin: true, uid: res.user?.uid });
      }

      // userData 있는지 확인
      const docRef2 = doc(dbService, "userData", res.user?.uid);
      getDoc(docRef2)
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
              navigate("/main");
            } else {
              // 회원가입
              navigate("/signup", { state: { uid: res.user?.uid } });
            }
          } else {
            console.log("No such document!");
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
      <S.Login onClick={signIn}>
        <img src="/assets/svg/ic-google.svg" alt="google" className="svg" />
        <p className="text">구글 계정으로 시작하기</p>
      </S.Login>
      <S.NonLogin onClick={moveToMain}>
        <p className="text">로그인 없이 시작하기</p>
      </S.NonLogin>
    </S.LoginWrapper>
  );
};

export default LoginButton;
