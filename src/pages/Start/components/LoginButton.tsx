import { useNavigate } from "react-router-dom";
import * as S from "./LoginButton.style";
import { dbService, signInGoogle } from "../../../firebase";
import { useRecoilState } from "recoil";
import { UserData, userLoginState, userState } from "../../../recoil/user";
import {
  DocumentData,
  collection,
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
      let loginName;
      if (res.user) {
        setUserLogin({ isLogin: true, uid: res.user?.uid });

        loginName = res.user?.displayName;
      }

      // userData 있는지 확인
      const docRef = collection(dbService, "userData");
      const q = query(docRef, where("userName", "==", loginName));

      getDocs(q)
        .then((querySnapshot) => {
          let data: DocumentData[] = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });

          if (data[0]) {
            const loadData: UserData = {
              userName: data[0].userName,
              userGender: data[0].userGender,
              userBirth: data[0].userBirth,
              userWishList: data[0].userWishList,
              userReviewList: data[0].userReviewList,
            };
            setUserData(loadData);

            // 로그인
            navigate("/main");
          } else {
            // 회원가입
            navigate("/signup", { state: { uid: res.user?.uid } });
          }
        })
        .catch((error) => {
          console.error("Error getting documents: ", error);
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
