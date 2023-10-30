import styled from "styled-components";
import { motion } from "framer-motion";
import keywordData from "../data/keyword.json";
import { useState } from "react";
import keywordModified from "../data/keywordModified.json";

type Elem = {
  name: string;
  siteUrl: string;
  imgUrl: string;
  keywordList: number[];
  scoreList: Object;
};

type Props = {
  elem: Elem;
};

const Card = ({ elem }: Props) => {
  //keyword
  type Keyword = {
    [key: string]: string;
  };
  const keywordModifiedList: Keyword = keywordModified;
  let keywordList = "";
  elem.keywordList.forEach((key) => {
    const idx = key.toString();
    const tag = keywordModifiedList[idx];
    keywordList += tag;
    keywordList += " ";
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Box onClick={() => window.open(elem.siteUrl)}>
        <p className="title-text">{elem.name}</p>
        <p>{keywordList}</p>
        <img src={elem.imgUrl} alt={elem.name} className="img" />
      </Box>
    </motion.div>
  );
};

export default Card;

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
  }
`;
