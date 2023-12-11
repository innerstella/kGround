import { useEffect, useState } from "react";
import styled from "styled-components";

interface MountainData {
  [key: string]: {
    imgUrl: string;
  };
}

interface Props {
  mountainName: string;
  mountainData: MountainData;
  onClick?: () => void;
}

const ImgButton = ({ mountainName, mountainData }: Props) => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    setImgUrl(mountainData[mountainName].imgUrl);
  }, [mountainData, mountainName]);

  return (
    <MainWapper>
      <img src={imgUrl} alt={mountainName} />
      <p className="text">{mountainName}</p>
    </MainWapper>
  );
};

export default ImgButton;

const MainWapper = styled.div`
  display: inline-flex;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;

  width: 7.625rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);
  background: var(--white, #fff);

  .text {
    padding-top: 0.1rem;
    color: #000;
    text-align: center;

    /* Sub1 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
