import styled from "styled-components";
import KeywordButton from "../../../components/keyword-button/KeywordButton";
import { useState } from "react";

interface Props {
  data: {
    [key: string]: string;
  };
  question: string;
}
const DetailReview = ({ data, question }: Props) => {
  const questionList: { [key: string]: string } = {
    reviewWhen: "언제 가셨나요?",
    reviewWho: "누구와 가셨나요?",
    reviewMood: "분위기는 어땠나요?",
    reviewETC: "또 어떤 점이 좋았나요?",
  };

  const outputData = Object.entries(data).map(([id, name]) => ({
    id: parseInt(id),
    name,
  }));

  const [clickedToggle, setClickedToggle] = useState(false);

  const clickButton = (id: number) => {
    console.log(id);
  };

  return (
    <MainWrapper>
      <SectionWrapper>
        <p className="text-title">{questionList[question]}</p>
        {!clickedToggle ? (
          <img
            className="ic"
            src="/assets/svg/ic-arrow-up.svg"
            alt="arrow"
            onClick={() => setClickedToggle(!clickedToggle)}
          />
        ) : (
          <>
            <img
              className="ic"
              src="/assets/svg/ic-arrow-down.svg"
              alt="arrow"
              onClick={() => setClickedToggle(!clickedToggle)}
            />
            <KeywordWrapper>
              {outputData.map((elem) => {
                return (
                  <KeywordButton
                    key={elem.id}
                    elem={elem}
                    onClick={() => clickButton(elem.id)}
                    animation={false}
                  />
                );
              })}
            </KeywordWrapper>
          </>
        )}
      </SectionWrapper>
    </MainWrapper>
  );
};

export default DetailReview;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  margin-bottom: 1rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.88rem;

  .text-title {
    color: var(--Text-Color, #0e1513);
    text-align: center;

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .ic {
    width: 1rem;
    height: 1rem;
  }
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
