import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";

const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <BannerContainer>
      <center>
        <Swiper {...bannerSettings}>
          <SwiperSlide>
            <img
              onClick={() =>
                window.open(
                  "http://a23157179.10pages.co.kr/board/list?bd_id=news"
                )
              }
              className="banner"
              src="/assets/banner/banner-1217.png"
              alt="배너"
            />
          </SwiperSlide>
        </Swiper>
      </center>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  margin: 1rem 0;
  width: 100%;

  .banner {
    width: 340px;
    height: 85px;
    border-radius: 10px;
  }
`;
