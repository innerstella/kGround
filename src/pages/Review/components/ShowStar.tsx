import styled from "styled-components";

interface ShowStarProps {
  reviewStar: number;
}

const icList: { [key: string]: string } = {
  true: "on",
  false: "off",
};

const ShowStar = ({ reviewStar }: ShowStarProps) => {
  const starList = [false, false, false, false, false];

  for (let i = 0; i < reviewStar; i++) {
    starList[i] = true;
  }
  return (
    <MainWrapper>
      {starList.map((elem) => {
        return (
          <img
            className="star"
            src={`/assets/svg/ic-star-${icList[elem.toString()]}.svg`}
            alt="star"
          />
        );
      })}
    </MainWrapper>
  );
};

export default ShowStar;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
