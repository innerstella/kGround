import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppBar = () => {
  const navigte = useNavigate();
  return (
    <MainWrapper>
      <img
        className="ic"
        src="/assets/svg/ic-back.svg"
        alt="back"
        onClick={() => navigte(-1)}
      />
      <img className="logo" src="/assets/image/img-logo.png" alt="logo" />
      <img
        className="ic"
        src="/assets/svg/ic-home-off.svg"
        alt="home"
        onClick={() => navigte("/main")}
      />
    </MainWrapper>
  );
};

export default AppBar;

const MainWrapper = styled.div`
  width: 420px;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
  height: 4rem;
  background-color: white;

  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
  .ic {
    width: 1.5rem;
    height: 1.5rem;
  }
  .logo {
    width: 10rem;
  }
`;
