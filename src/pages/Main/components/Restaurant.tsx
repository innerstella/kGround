import * as S from "./MainComponents.style";

import CircleButton from "../../../components/circle-button/CircleButton";
import RestaurantButton from "../../../components/restaurant-button/RestaurantButton";

const Restaurant = () => {
  return (
    <S.MainWrapper>
      <S.Text>
        <span className="sub1">등산로 시작점 50m 반경에&nbsp;</span>
        <span className="sub2">맛집 많은 산</span>
      </S.Text>
      <S.ButtonWrapper>
        <div className="gap">
          <RestaurantButton mountainName="관악산" />
          <RestaurantButton mountainName="인왕산" />
        </div>
        <CircleButton type="main" />
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Restaurant;
