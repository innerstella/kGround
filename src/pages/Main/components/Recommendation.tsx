import * as S from "./Recommendation.style";

import { useRecoilState, useRecoilValue } from "recoil";
import { mountainState, recommendationState } from "../../../recoil/mountain";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";

interface Data {
  imgUrl: string;
  name: string;
  desc: string;
}

const Recommendation = () => {
  const navigate = useNavigate();
  const mountainData = useRecoilValue(mountainState);
  const [recommendationData, setRecommendationData] =
    useRecoilState(recommendationState);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const docRef = collection(dbService, "recommendationData");
    getDocs(docRef)
      .then((querySnapshot) => {
        let data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setRecommendationData(data);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, [setRecommendationData]);

  useEffect(() => {
    mountainData.forEach((item) => {
      if (item.name === recommendationData[0].ranking[0]) {
        setData(item);
      }
    });
  }, [recommendationData, mountainData]);

  const moveToDetail = () => {
    navigate("/detail", { state: { data: data } });
  };

  return (
    <S.MainWrapper>
      <S.LeftWrapper>
        <S.TagWrapper>
          <p className="text">이번 달 추천</p>
        </S.TagWrapper>
        {data ? (
          <>
            <S.TextWrapper onClick={moveToDetail}>
              <p className="title">{recommendationData[0].ranking[0]}</p>
              <p className="desc"># {recommendationData[0].desc}</p>
            </S.TextWrapper>
          </>
        ) : (
          <>
            <Skeleton>
              <S.SkeletonWrapper>dfddfddfddfd</S.SkeletonWrapper>
            </Skeleton>
            <Skeleton>
              <S.SkeletonWrapper>dfddfddfddfd</S.SkeletonWrapper>
            </Skeleton>
          </>
        )}
        <S.MoreWrapper onClick={() => navigate("/list/recommendation")}>
          <p className="text">추천 더 보기</p>
        </S.MoreWrapper>
      </S.LeftWrapper>
      {data && (
        <S.ImgWrapper
          onClick={moveToDetail}
          src={data?.imgUrl}
          alt="mountain"
        />
      )}
    </S.MainWrapper>
  );
};

export default Recommendation;
