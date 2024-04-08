import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import keywordData from "../../../data/keyword-id.json";
import { MountainData } from "../../../recoil/mountain";

interface CardProps {
  data: MountainData;
}

const CardSection = ({ data }: CardProps) => {
  const navigate = useNavigate();
  //keyword
  type Keyword = {
    [key: string]: string;
  };
  const keywordModifiedList: Keyword = keywordData;
  let keywordList = "";
  data.keywordList.forEach((key) => {
    const idx = key.toString();
    const tag = keywordModifiedList[idx];
    keywordList += tag;
    keywordList += " ";
  });

  return (
    <MainWrapper onClick={() => navigate(`/detail/${data.name}`)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Box>
          <p className="title-text">{data.name}</p>
          <p>{keywordList}</p>
          <img src={data.imgUrl} alt={data.name} className="img" />
        </Box>
      </motion.div>
    </MainWrapper>
  );
};

export default CardSection;

const MainWrapper = styled.div`
  width: 100%;
`;

const Box = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title-text {
    color: #000;
    font-family: SUIT Variable;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .img {
    border-radius: 0.625rem;
    width: 100%;
    height: 5.25rem;
    object-fit: cover;
  }
`;
