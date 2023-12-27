import GNB from "../../components/gnb/GNB";
import * as S from "./Main.style";
import Recommendation from "./components/Recommendation";
import Subway from "./components/Subway";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useRecoilState } from "recoil";
import { mountainState } from "../../recoil/mountain";
import Banner from "../../components/banner/Banner";

const MainPage = () => {
  const [mountainData, setMountainData] = useRecoilState(mountainState);

  useEffect(() => {
    const docRef = collection(dbService, "mountainData");
    getDocs(docRef)
      .then((querySnapshot) => {
        let data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setMountainData(data);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, [setMountainData]);

  return (
    <S.MainWrapper>
      <S.Logo src="/assets/logo.png" alt="logo" />
      <Recommendation />
      <Subway />
      <Banner />
      <GNB page="home" />
    </S.MainWrapper>
  );
};

export default MainPage;
