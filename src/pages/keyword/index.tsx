import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import * as S from "./Keyword.style";

import Bubble from "./components/Bubble";
import KeywordButton from "../../components/keyword-button/KeywordButton";

import keywordData from "../../data/keyword-id.json";
import AppBar from "../../components/app-bar/AppBar";
import GNB from "../../components/gnb/GNB";
import WideButton from "../../components/wide-button/WideButton";

const KeywordPage = () => {
  const navigate = useNavigate();

  // keyword data
  const displayID = [2, 4, 5, 10, 12, 13, 14, 15];
  const outputData = Object.entries(keywordData)
    .map(([id, name]) => ({
      id: parseInt(id),
      name,
    }))
    .filter((elem) => displayID.includes(elem.id));

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
    <S.MainWrapper>
      <AppBar />
      <Bubble text="💬 어떤 여행을 하고 싶은가요?" />
      <S.KeywordWrapper>
        {outputData.map((elem) => {
          console.log(elem);
          return (
            <KeywordButton
              key={elem.id}
              elem={elem}
              onClick={() => clickButton(elem.id)}
              animation={true}
            />
          );
        })}
      </S.KeywordWrapper>
      <div className="fixed-bottom">
        <WideButton
          text="여행지 추천 받기"
          onClick={() => clickNext()}
          type="fill"
        />
      </div>
      <GNB page="search" />
    </S.MainWrapper>
  );
};

export default KeywordPage;
