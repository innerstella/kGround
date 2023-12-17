import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

const Bubble = ({ text }: Props) => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="text">{text}</p>
      </motion.div>
    </Box>
  );
};

export default Bubble;

const Box = styled.div`
  border-radius: 0.625rem;
  background: rgba(4, 57, 39, 0.1);
  padding: 0.7rem 1rem;

  margin-top: 2.5rem;
  width: 100%;

  .text {
    color: var(--Main-Color, #043927);

    /* H1 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: black;
  }
`;
