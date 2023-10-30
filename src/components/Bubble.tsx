import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

const Bubble = ({ text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Box>
        <p>{text}</p>
      </Box>
    </motion.div>
  );
};

export default Bubble;

const Box = styled.div`
  border-radius: 0.625rem;
  background: var(--blue20);
  padding: 0.7rem 1rem;

  width: 80vw;
`;
