import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CheckBox from "./CheckBox";

const Terms = () => {
  const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const clickAll = () => {
    if (checkAll) {
      setCheckAll(false);
      setCheck1(false);
      setCheck2(false);
    } else {
      setCheckAll(true);
      setCheck1(true);
      setCheck2(true);
    }
  };

  useEffect(() => {
    if (check1 && check2) {
      setCheckAll(true);
    }

    if (!check1 || !check2) {
      setCheckAll(false);
    }
  }, [check1, check2]);

  useEffect(() => {
    if (checkAll) {
      localStorage.setItem("checkAll", "true");
    } else {
      localStorage.setItem("checkAll", "false");
    }
  }, [checkAll]);

  return (
    <MainWrapper>
      <div className="term-box">
        <span className="bold">모두 확인, 동의합니다.</span>
        <CheckBox isClicked={checkAll} onClick={() => clickAll()} />
      </div>
      <hr className="hr" />
      <div className="term-box">
        <span className="normal" onClick={() => navigate("/termsofuse")}>
          이용약관 동의 (필수)
        </span>
        <CheckBox isClicked={check1} onClick={() => setCheck1(!check1)} />
      </div>
      <div className="term-box">
        <span className="normal" onClick={() => navigate("/termsofdata")}>
          개인정보 수집 및 이용 동의 (필수)
        </span>
        <CheckBox isClicked={check2} onClick={() => setCheck2(!check2)} />
      </div>
    </MainWrapper>
  );
};

export default Terms;

const MainWrapper = styled.div`
  border-radius: 0.875rem;
  border: 1px solid var(--Point-Color, #35b711);

  width: 100%;

  padding: 1rem;

  .bold {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .normal {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
  .term-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
  .hr {
    margin: 0.5rem 0;
  }
`;
