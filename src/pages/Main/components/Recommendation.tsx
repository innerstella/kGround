import { Skeleton } from "@chakra-ui/react"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"

import * as S from "./Recommendation.style"
import { dbService } from "../../../firebase"
import {
  MountainData,
  mountainState,
  recommendationState,
} from "../../../recoil/mountain"

const Recommendation = () => {
  const navigate = useNavigate()
  const mountainData = useRecoilValue(mountainState)
  const [recommendationData, setRecommendationData] =
    useRecoilState(recommendationState)
  const [data, setData] = useState<MountainData | null>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const docRef = collection(dbService, "recommendationData")
    const today = new Date()
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1
    const year = today.getFullYear()
    const version = `${year.toString().slice(2)}${month}`

    getDocs(docRef)
      .then((querySnapshot) => {
        let data: any[] = []
        querySnapshot.forEach((doc) => {
          if (doc.data().version === version) {
            data.push(doc.data())
          }
        })

        setRecommendationData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error getting documents: ", error)
      })
  }, [setRecommendationData])

  useEffect(() => {
    mountainData.forEach((item) => {
      if (item.name === recommendationData[0]?.ranking[0]) {
        setData(item)
      }
    })
  }, [recommendationData, mountainData])

  const moveToDetail = () => {
    if (data) {
      navigate(`/detail/${data.name}`)
    }
  }

  return (
    <S.MainWrapper>
      <S.LeftWrapper>
        <S.TagWrapper>
          <p className="text">이번 달 추천</p>
        </S.TagWrapper>
        {isLoading ? (
          <>
            <Skeleton>
              <S.SkeletonWrapper>dfddfddfddfd</S.SkeletonWrapper>
            </Skeleton>
            <Skeleton>
              <S.SkeletonWrapper>dfddfddfddfd</S.SkeletonWrapper>
            </Skeleton>
          </>
        ) : recommendationData?.length > 0 ? (
          <>
            <S.TextWrapper onClick={moveToDetail}>
              <p className="title">{recommendationData[0].ranking[0]}</p>
              <p className="desc"># {recommendationData[0].desc}</p>
            </S.TextWrapper>
          </>
        ) : (
          <>
            <S.TextWrapper onClick={moveToDetail}>
              <p className="title">이번 달 추천 데이터가 없어요.</p>
            </S.TextWrapper>
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
  )
}

export default Recommendation
