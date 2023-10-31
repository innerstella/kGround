import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import Header from "../../components/Header";
import Bubble from "../../components/Bubble";
import ChipButton from "../../components/ChipButton";
import RectangleButton from "../../components/RectangleButton";

import keywordData from "../../data/keyword-json.json";

const KeywordPage = () => {
  const navigate = useNavigate();

  // keyword data
  const keywordList = [];
  for (const key in keywordData) {
    keywordList.push(keywordData[key]);
  }

  // clicked keyword
  let clickedList: number[] = [];
  const clickButton = (id: number) => {
    if (clickedList.includes(id)) {
      clickedList = clickedList.filter((elem) => elem !== id);
    } else {
      clickedList.push(id);
    }
  };

  // click next
  const toast = useToast();
  const clickNext = () => {
    if (clickedList.length > 0) {
      navigate("/result", {
        state: clickedList,
      });
    } else {
      toast({
        title: "키워드를 1개 이상 선택해주세요!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <MainBox>
      <Header />
      <Bubble text="💬 어떤 여행을 하고 싶은가요?" />
      <ButtonBox>
        {keywordList.map((elem) => {
          return (
            <ChipButton
              key={elem.id}
              elem={elem}
              onClick={() => clickButton(elem.id)}
            />
          );
        })}
      </ButtonBox>
      <RectangleButton
        text="여행지 추천 받기"
        color="gray100"
        onClick={() => clickNext()}
      />
    </MainBox>
  );
};

export default KeywordPage;

const MainBox = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: white;
  font-family: "SUIT", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 13.5625rem;
    height: 4.25rem;
    padding-top: 35vh;
  }
  .logo-text {
    color: var(--black100, #000);
    font-family: SUIT Variable;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    padding-top: 0.5rem;
  }
  .info-text {
    color: var(--gray500, #686868);
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-top: 0.7rem;
  }
`;

const ButtonBox = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  width: 90vw;
`;
