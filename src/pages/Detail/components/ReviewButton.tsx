import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  mountainName: string;
  mountainImgUrl: string;
}

const ReviewButton = ({ mountainName, mountainImgUrl }: Props) => {
  const navigate = useNavigate();
  return (
    <MainWrapper
      onClick={() =>
        navigate("/review/new", {
          state: { mountainName: mountainName, mountainImgUrl: mountainImgUrl },
        })
      }
    >
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
