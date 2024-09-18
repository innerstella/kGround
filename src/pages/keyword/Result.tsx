import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"

import * as S from "./Result.style"
import AppBar from "../../components/app-bar/AppBar"
import GNB from "../../components/gnb/GNB"
import WideButton from "../../components/wide-button/WideButton"
import keywordData from "../../data/keyword-id.json"
import { MountainData, mountainState } from "../../recoil/mountain"
import Bubble from "./components/Bubble"
import CardSection from "./components/Card"
import Loading from "./components/Loading"

const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const clickedList = location.state
  const [isLoaded, setIsLoaded] = useState(false)

  // 산 데이터 순회하면서 키워드 리스트에
  // clickedList의 원소가 하나라도 포함되면 출력
  const mountainData = useRecoilValue(mountainState)
  const [displayList, setDisplayList] = useState<MountainData[]>()

  useEffect(() => {
    const list = mountainData.filter((elem) => {
      if (elem.keywordList !== undefined) {
        const hasCommon = elem.keywordList.some((elem) =>
          clickedList.includes(+elem)
        )
        if (hasCommon) return elem
      }
    })

    setDisplayList(list)
  }, [mountainData, clickedList])

  // keyword : id -> name
  type Keyword = {
    [key: string]: string
  }
  const keywordModifiedList: Keyword = keywordData
  const [keywordList, setKeywordList] = useState<string[]>()

  useEffect(() => {
    const transform = clickedList.map((key: number) => {
      let tempStr = ""
      const keyword = keywordModifiedList[key.toString()]

      tempStr += keyword
      tempStr += " "

      return tempStr
    })

    setKeywordList(transform)
  }, [clickedList, keywordModifiedList])

  // loading
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1500)
  })

  return (
    <S.MainWrapper>
      <AppBar />
      {isLoaded && keywordList ? (
        displayList && displayList.length > 0 ? (
          <>
            <Bubble text={keywordList?.join("")} />
            {displayList.map((elem, idx) => {
              return <CardSection data={elem} key={idx} />
            })}
          </>
        ) : (
          <>
            <Bubble
              text="💬 해당 키워드들에 맞는 여행지를
            찾지 못했어요.
            다른 키워드를 선택해볼까요?"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="fixed-bottom"
            >
              <WideButton
                text="키워드 다시 선택하기"
                type="fill"
                onClick={() => navigate("/keywords")}
              />
            </motion.div>
          </>
        )
      ) : (
        <S.LoadingBox>
          <Bubble
            text="💬 선택해주신 키워드를 기반으로
여행지를 찾아보고 있어요..."
          />
          <Loading />
        </S.LoadingBox>
      )}

      <GNB page="search" />
    </S.MainWrapper>
  )
}

export default ResultPage
