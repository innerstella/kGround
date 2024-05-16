import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { userLoginState } from "../../../recoil/user";

interface Props {
  mountainName: string;
  mountainImgUrl: string;
}

const ReviewButton = ({ mountainName, mountainImgUrl }: Props) => {
  const navigate = useNavigate();
  const toast = useToast();
  const loginState = useRecoilValue(userLoginState);

  const writeReview = () => {
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

    navigate("/review/new", {
      state: { mountainName: mountainName, mountainImgUrl: mountainImgUrl },
    });
  };
  return (
    <MainWrapper onClick={writeReview}>
      <p className="text">리뷰</p>
    </MainWrapper>
  );
};

export default ReviewButton;

const MainWrapper = styled.div`
  border-radius: 10px;
  background: var(--white, #fff);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.38rem;

  cursor: pointer;

  .text {
    color: var(--Main-Color, #043927);
    font-family: Pretandard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.1rem;
  }
`;
