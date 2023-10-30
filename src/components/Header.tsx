import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")}>
      <img
        src="/assets/png/logo.png"
        alt="logo"
        className="header prevent-copy"
      />
    </Box>
  );
};

export default Header;

const Box = styled.div`
  padding: 50px;
  .header {
    width: 125px;
    height: 39px;
  }
`;
