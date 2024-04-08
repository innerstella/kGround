import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

import * as S from "./Create.style";
import { dbService } from "../firebase";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [track, setTrack] = useState("");
  const [elevation, setElevation] = useState(0);
  const [level, setLevel] = useState("");
  const [startAddress, setStartAddress] = useState("");
  const [subway, setSubway] = useState("");
  const [walkingDistance, setWalkingDistance] = useState(0);
  const [walkingTime, setWalkingTime] = useState(0);
  const [restaurant1Name, setRestaurant1Name] = useState("");
  const [restaurant1Address, setRestaurant1Address] = useState("");
  const [restaurant1Menu, setRestaurant1Menu] = useState("");
  const [restaurant1Time, setRestaurant1Time] = useState(0);
  const [restaurant2Name, setRestaurant2Name] = useState("");
  const [restaurant2Address, setRestaurant2Address] = useState("");
  const [restaurant2Menu, setRestaurant2Menu] = useState("");
  const [restaurant2Time, setRestaurant2Time] = useState(0);
  const [restaurant3Name, setRestaurant3Name] = useState("");
  const [restaurant3Address, setRestaurant3Address] = useState("");
  const [restaurant3Menu, setRestaurant3Menu] = useState("");
  const [restaurant3Time, setRestaurant3Time] = useState(0);

  // 데이터 만들기
  const data = {
    name: name,
    imgUrl: imgUrl,
    track: track,
    elevation: elevation,
    level: level,
    startAddress: startAddress,
    subway: subway,
    walkingDistance: walkingDistance,
    walkingTime: walkingTime,
    diner: [
      {
        dinerName: restaurant1Name,
        dinerAddress: restaurant1Address,
        dinerMenu: restaurant1Menu,
        dinerTime: restaurant1Time,
      },
      {
        dinerName: restaurant2Name,
        dinerAddress: restaurant2Address,
        dinerMenu: restaurant2Menu,
        dinerTime: restaurant2Time,
      },
      {
        dinerName: restaurant3Name,
        dinerAddress: restaurant3Address,
        dinerMenu: restaurant3Menu,
        dinerTime: restaurant3Time,
      },
    ],
  };
  const makeData = () => {
    createDB();
  };

  // 파이어 베이스 저장
  const createDB = () => {
    if (
      name &&
      imgUrl &&
      track &&
      elevation &&
      level &&
      startAddress &&
      subway &&
      walkingDistance &&
      walkingTime &&
      restaurant1Name &&
      restaurant1Address &&
      restaurant1Menu &&
      restaurant1Time > 0 &&
      restaurant2Name &&
      restaurant2Address &&
      restaurant2Menu &&
      restaurant2Time > 0 &&
      restaurant3Name &&
      restaurant3Address &&
      restaurant3Menu &&
      restaurant3Time > 0
    ) {
      setDoc(doc(dbService, "mountainData", name), data);
      alert(`${name} 데이터가 저장되었습니다.`);
    } else {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
  };

  return (
    <S.Wrapper>
      <h1>Mountain Data Create</h1>
      <S.Box>
        <label>name</label>
        <input
          type="string"
          placeholder="ex. 관악산"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>imgUrl</label>
        <input
          type="string"
          placeholder="ex. 위키백과 이미지 주소"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>track</label>
        <input
          type="string"
          placeholder="ex. 등산로"
          value={track}
          onChange={(e) => setTrack(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>elevation</label>
        <input
          type="number"
          placeholder="ex. 624"
          value={elevation}
          onChange={(e) => setElevation(+e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>level</label>
        <input
          type="string"
          placeholder="ex. 쉬움, 보통, 어려움"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>startAddress</label>
        <input
          type="string"
          placeholder="ex. 서울 관악구 승방1길"
          value={startAddress}
          onChange={(e) => setStartAddress(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>subway</label>
        <input
          type="string"
          placeholder="ex. 2호선 사당역"
          value={subway}
          onChange={(e) => setSubway(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>walkingDistance</label>
        <input
          type="number"
          placeholder="ex. 100"
          value={walkingDistance}
          onChange={(e) => setWalkingDistance(+e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>walkingTime</label>
        <input
          type="number"
          placeholder="ex. 1"
          value={walkingTime}
          onChange={(e) => setWalkingTime(+e.target.value)}
        />
      </S.Box>
      <p>
        <strong>restaurant-1</strong>
      </p>
      <S.Box>
        <label>- name</label>
        <input
          type="string"
          value={restaurant1Name}
          onChange={(e) => setRestaurant1Name(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- address</label>
        <input
          type="string"
          value={restaurant1Address}
          onChange={(e) => setRestaurant1Address(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- menu</label>
        <input
          type="string"
          value={restaurant1Menu}
          onChange={(e) => setRestaurant1Menu(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- time</label>
        <input
          type="number"
          value={restaurant1Time}
          onChange={(e) => setRestaurant1Time(+e.target.value)}
        />
      </S.Box>
      <strong>restaurant-2</strong>
      <S.Box>
        <label>- name</label>
        <input
          type="string"
          value={restaurant2Name}
          onChange={(e) => setRestaurant2Name(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- address</label>
        <input
          type="string"
          value={restaurant2Address}
          onChange={(e) => setRestaurant2Address(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- menu</label>
        <input
          type="string"
          value={restaurant2Menu}
          onChange={(e) => setRestaurant2Menu(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- time</label>
        <input
          type="number"
          value={restaurant2Time}
          onChange={(e) => setRestaurant2Time(+e.target.value)}
        />
      </S.Box>
      <strong>restaurant-3</strong>
      <S.Box>
        <label>- name</label>
        <input
          type="string"
          value={restaurant3Name}
          onChange={(e) => setRestaurant3Name(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- address</label>
        <input
          type="string"
          value={restaurant3Address}
          onChange={(e) => setRestaurant3Address(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- menu</label>
        <input
          type="string"
          value={restaurant3Menu}
          onChange={(e) => setRestaurant3Menu(e.target.value)}
        />
      </S.Box>
      <S.Box>
        <label>- time</label>
        <input
          type="number"
          value={restaurant3Time}
          onChange={(e) => setRestaurant3Time(+e.target.value)}
        />
      </S.Box>
      <S.Button onClick={makeData}>저장</S.Button>
    </S.Wrapper>
  );
};

export default CreatePage;
