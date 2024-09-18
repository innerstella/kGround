import { DocumentData, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"

import * as S from "./ReviewFinish.style"
import AppBar from "../../components/app-bar/AppBar"
import GNB from "../../components/gnb/GNB"
import TagButton from "../../components/tag-button/TagButton"
import WideButton from "../../components/wide-button/WideButton"
import reviewJson from "../../data/review.json"
import { dbService } from "../../firebase"
import { mountainState } from "../../recoil/mountain"
import { UserData, userLoginState, userState } from "../../recoil/user"
import Loading from "../Keyword/components/Loading"

const ReivewFinishPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const reviewID = location.state.reviewDocID
  const mountainData = useRecoilValue(mountainState)
  const userLoginData = useRecoilValue(userLoginState)
  const [userData, setUserData] = useRecoilState(userState)

  const [review, setReview] = useState<DocumentData>()
  const [tagList, setTagList] = useState<any[]>([])
  const [mountainAddress, setMountainAddress] = useState<string>("")
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [reviewLoaded, setReviewLoaded] = useState(false)
  const [mountainLoaded, setMountainLoaded] = useState<boolean>(false)
  const [tagLoaded, setTagLoaded] = useState<boolean>(false)
  const [elevLoaded, setElevLoaded] = useState<boolean>(false)
  const [mountainCnt, setMountainCnt] = useState<number>(0)
  const [mountainElev, setMountainElev] = useState<number>(0)

  // loading
  useEffect(() => {
    if (reviewLoaded && mountainLoaded && tagLoaded && elevLoaded) {
      setIsLoaded(true)
    }
  }, [reviewLoaded, mountainLoaded, tagLoaded, elevLoaded])

  // 작성 리뷰 정보 불러오기
  const getReviewData = async () => {
    const docRef = doc(dbService, "reviewData", reviewID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setReview(docSnap.data())
      setReviewLoaded(true)

      return docSnap.data()
    }
  }

  // 총 높이 util 함수
  const getTotalElev = () => {
    const reviewList = userData.userReviewList
    let totalHeight = 0

    reviewList.forEach(async (elem) => {
      const docRef = doc(dbService, "reviewData", elem)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const name = docSnap.data().reviewMountain
        const elev = mountainData.filter((elem) => elem.name === name)[0]
          .elevation
        totalHeight += elev
      }
      setMountainElev(totalHeight)
      setElevLoaded(true)
    })
  }

  useEffect(() => {
    // user data reload
    const uid = userLoginData.uid
    const docRef = doc(dbService, "userData", uid)

    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data()
          const reviewList = data.userReviewList

          setUserData(data as UserData)
          setMountainCnt(reviewList.length)
          getTotalElev()

          getReviewData().then((res) => {
            // 산 주소
            const data = mountainData.filter(
              (elem) => elem.name === res?.reviewMountain
            )[0]

            if (data) {
              setMountainAddress(data.startAddress)
              setMountainLoaded(true)
            }

            // 리뷰 태그 모으기
            const reviewWhenData: { [key: string]: string } =
              reviewJson.reviewWhen
            const reviewWhoData: { [key: string]: string } =
              reviewJson.reviewWho
            const reviewMoodData: { [key: string]: string } =
              reviewJson.reviewMood
            const reviewETCData: { [key: string]: string } =
              reviewJson.reviewETC

            if (res) {
              const reviewWhenID = res.reviewWhen
              const reviewWhoID = res.reviewWho
              const reviewMoodIDList = res.reviewMood
              const reviewETCIDList = res.reviewETC
              let currTagList: string[] = []

              res.reviewWhen > 0 &&
                currTagList.push(reviewWhenData[reviewWhenID])
              res.reviewWho > 0 && currTagList.push(reviewWhoData[reviewWhoID])
              reviewMoodIDList.length > 0 &&
                reviewMoodIDList.forEach((elem: number) => {
                  currTagList.push(reviewMoodData[elem])
                })
              reviewETCIDList.length > 0 &&
                reviewETCIDList.forEach((elem: number) => {
                  currTagList.push(reviewETCData[elem])
                })

              setTagList([...tagList, ...currTagList])
              setTagLoaded(true)
            } else {
              setTagLoaded(true)
            }
          })
        }
      })
      .catch((error) => {
        throw error
      })
  }, [])

  return (
    <S.MainWrapper>
      <AppBar />
      {isLoaded ? (
        <>
          <S.InfoWrapper>
            <p className="main">리뷰가 등록되었어요!</p>
            <p className="sub">
              지금까지 <span className="strong">{mountainCnt}개</span>의 산을
              완등했어요!
              <br />
              등반한 산의 총 높이는{" "}
              <span className="strong">{mountainElev}m</span>예요!
            </p>
          </S.InfoWrapper>
          <S.CardWrapper>
            <p className="mountainName">{review?.reviewMountain}</p>
            <p className="mountainAddress">{mountainAddress}</p>
            <p className="reviewComment">{review?.reviewComment}</p>
            <S.TagWrapper>
              {tagList.map((elem, idx) => {
                return <TagButton key={idx} text={elem} />
              })}
            </S.TagWrapper>
          </S.CardWrapper>
          <WideButton
            text="작성한 리뷰 보기"
            type="outline"
            onClick={() => navigate("/review/list")}
          />
          <WideButton
            text="메인 화면으로 가기"
            type="fill"
            onClick={() => navigate("/")}
          />
        </>
      ) : (
        <S.LoadingBox>
          <Loading />
        </S.LoadingBox>
      )}
      <GNB page="mypage" />
    </S.MainWrapper>
  )
}

export default ReivewFinishPage
