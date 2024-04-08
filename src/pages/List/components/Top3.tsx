import { useNavigate } from "react-router-dom";

import * as S from "./Top3.style";
import ChipButton from "../../../components/subway-button/ChipButton";
import { MountainData } from "../../../recoil/mountain";

interface Props {
  data: any;
}

const Top3 = ({ data }: Props) => {
  const data1 = data[0];
  const data2 = data[1];
  const data3 = data[2];

  const navigate = useNavigate();
  const moveToDetail = (data: MountainData) => {
    navigate(`/detail/${data.name}`);
  };

  return (
    <S.MainWrapper>
      <S.Center>
        <S.FirstWrapper onClick={() => moveToDetail(data1)}>
          <img className="icon" src="/assets/icon/ic-prize-1.svg" alt="1" />
          <img className="img" src={data1.imgUrl} alt={data1.name} />
          <p className="title">{data1.name}</p>
          <p className="desc">
            {data1.subway}에서
            <br />
            {data1.walkingDistance}m
          </p>
          <ChipButton walkingTime={data1.walkingTime} />
        </S.FirstWrapper>
      </S.Center>
      <S.SecondWrapper onClick={() => moveToDetail(data2)}>
        <img className="icon" src="/assets/icon/ic-prize-2.svg" alt="2" />
        <img className="img" src={data2.imgUrl} alt={data2.name} />
        <p className="title">{data2.name}</p>
        <p className="desc">
          {data2.subway}에서
          <br />
          {data2.walkingDistance}m
        </p>
        <ChipButton walkingTime={data2.walkingTime} />
      </S.SecondWrapper>
      <S.ThirdWrapper onClick={() => moveToDetail(data3)}>
        <img className="icon" src="/assets/icon/ic-prize-3.svg" alt="3" />
        <img className="img" src={data3.imgUrl} alt={data3.name} />
        <p className="title">{data3.name}</p>
        <p className="desc">
          {data3.subway}에서
          <br />
          {data3.walkingDistance}m
        </p>
        <ChipButton walkingTime={data3.walkingTime} />
      </S.ThirdWrapper>
    </S.MainWrapper>
  );
};

export default Top3;
