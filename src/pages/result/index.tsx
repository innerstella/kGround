import styled from "styled-components";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Bubble from "../../components/Bubble";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import keywordData from "../../data/keyword.json";
import Card from "../../components/Card";
import dummyData from "../../data/dummy.json";
import RectangleButton from "../../components/RectangleButton";
import { motion } from "framer-motion";
import RestartButton from "../../components/RestartButton";

const ResultPage = () => {
  const navigate = useNavigate();
  // loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  });

  // keyword
  const location = useLocation();
  const keywordList = location.state;
  console.log(keywordList);

  // bubble keyword
  let bubbleKeyword = "";
  for (const key in keywordData) {
    if (keywordList.includes(keywordData[key].id)) {
      bubbleKeyword += keywordData[key].name;
      bubbleKeyword += " ";
    }
  }

  // dummy keywordList에 keyword 중 하나라도 포함되면 출력
  let spotList = [];
  for (const key in dummyData) {
    const dataKeyword = dummyData[key].keywordList;
    const hasCommon = dataKeyword.some((elem) => keywordList.includes(elem));

    if (hasCommon) {
      spotList.push(dummyData[key]);
    }
  }

  return (
    <MainBox>
      <Header />
      {isLoading ? (
        <LoadingBox>
          <Bubble
            text="💬 선택해주신 키워드를 기반으로
여행지를 찾아보고 있어요..."
          />
          <Loading />
        </LoadingBox>
      ) : (
        <ContentBox>
          {spotList.length > 0 ? (
            <>
              <Bubble text={bubbleKeyword} />
              {spotList.map((elem) => {
                return <Card elem={elem} />;
              })}
            </>
          ) : (
            <>
              <Bubble
                text="💬 해당 키워드들에 맞는 여행지를 
찾지 못했어요. 
다른 키워드를 선택해볼까요?"
              />
            </>
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <RestartButton
              text="키워드 다시 선택하기"
              color="gray100"
              onClick={() => navigate("/keyword")}
            />
          </motion.div>
        </ContentBox>
      )}
    </MainBox>
  );
};

export default ResultPage;

const MainBox = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: white;
  font-family: "SUIT", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

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

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25vh;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
