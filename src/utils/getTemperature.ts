import axios from "axios";

const key = process.env.REACT_APP_WEATHER_API_KEY;
const today = new Date();
const startHh = "01";
const endHh = "12";
const todayString = `${today.getFullYear()}${
  today.getMonth() + 1
}${today.getDate()}`;
const todayNum = Number(todayString);
const startDt = todayNum - 2;
const endDt = todayNum - 1;

const getTemperature = async () => {
  const temp = await axios
    .get(
      `http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=${key}&numOfRows=23&pageNo=1&dataCd=ASOS&dateCd=HR&stnIds=108&endDt=${endDt}&endHh=${endHh}&startHh=${startHh}&startDt=${startDt}&dataType=Json`
    )
    .then((res: any) => {
      return res.data.response.body.items.item[0].ta;
    })
    .catch((err: any) => {
      console.log(err);
    });

  return temp;
};

export default getTemperature;
