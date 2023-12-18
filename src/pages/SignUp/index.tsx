import { useState } from "react";
import WideButton from "../../components/wide-button/WideButton";
import * as S from "./SignUp.style";

import { Input, Select, useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import BackBar from "./components/BackBar";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<number>(0);
  const [birth, setBirth] = useState<string>("");

  const uid = location.state.uid;

  const signUp = () => {
    // 예외 처리
    if (name === "") {
      toast({
        title: "닉네임을 입력해주세요.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (gender === 0) {
      toast({
        title: "성별을 선택해주세요.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (birth === "") {
      toast({
        title: "생년월일을 입력해주세요.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // 데이터 등록
    const data = {
      userName: name,
      userGender: gender,
      userBirth: birth.split("-").join(""),
      userWishList: [],
      userReviewList: [],
    };
    setDoc(doc(dbService, "userData", uid), data);
    navigate("/main");
  };

  return (
    <S.MainWrapper>
      <BackBar />
      <p className="h1">회원가입하기</p>
      <S.InputWrapper>
        <div className="input">
          <p className="body1">닉네임</p>
          <Input
            focusBorderColor="green"
            size="md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <p className="body1">성별</p>
          <Select
            focusBorderColor="green"
            placeholder="----"
            value={gender}
            onChange={(e) => setGender(+e.target.value)}
          >
            <option value={1}>남성</option>
            <option value={2}>여성</option>
          </Select>
        </div>
        <div className="input">
          <p className="body1">생년월일</p>
          <Input
            focusBorderColor="green"
            size="md"
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
      </S.InputWrapper>
      <WideButton text="산책하러가기" type="fill" onClick={signUp} />
    </S.MainWrapper>
  );
};

export default SignUpPage;
