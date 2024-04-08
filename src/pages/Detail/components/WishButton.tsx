import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserData, userLoginState, userState } from "../../../recoil/user";
import { doc, setDoc } from "firebase/firestore";
import { dbService } from "../../../firebase";
import { useToast } from "@chakra-ui/react";

interface Props {
  mountainName: string;
}

const WishButton = ({ mountainName }: Props) => {
  const loginState = useRecoilValue(userLoginState);
  const [userData, setUserData] = useRecoilState(userState);
  const [isWish, setIsWish] = useState(false);
  const toast = useToast();
  const userWishList = userData.userWishList;

  useEffect(() => {
    if (userWishList.includes(mountainName)) {
      // db에 있으면 => 빨간 하트로 렌더
      setIsWish(true);
    } else {
      // db에 없으면 => 기본 하트로 렌더
      setIsWish(false);
    }
  }, [mountainName, userData.userWishList, userWishList]);

  const clickWish = () => {
    // 비로그인 예외 처리
    if (!loginState.isLogin) {
      toast({
        title: "로그인 후 이용해주세요!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const data = { ...userData };
    if (userWishList.includes(mountainName)) {
      // db에 있으면 => db에서 삭제 & 기본 하트 변경
      data.userWishList = data.userWishList.filter(
        (wish: string) => wish !== mountainName
      );
      updateField(data);
      setIsWish(false);
      toast({
        title: "찜 리스트에서 제거되었습니다!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      // db에 없으면 => db에 추가 & 빨간 하트 변경
      data.userWishList = [...data.userWishList, mountainName];
      updateField(data);
      setIsWish(true);
      toast({
        title: "찜 리스트에 추가되었습니다!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const updateField = async (data: UserData) => {
    try {
      setDoc(doc(dbService, "userData", loginState.uid), data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainWrapper onClick={clickWish}>
      {isWish ? (
        <img src="/assets/icon/ic-wish-on.svg" alt="wishlist" />
      ) : (
        <img src="/assets/icon/ic-wish.svg" alt="wishlist" />
      )}
    </MainWrapper>
  );
};

export default WishButton;

const MainWrapper = styled.div`
  border-radius: 50%;
  background: var(--white, #fff);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.38rem;
`;
