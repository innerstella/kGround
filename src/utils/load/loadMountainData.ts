import { collection, getDocs } from "firebase/firestore";

import { dbService } from "../../firebase";

const loadMountainData = async () => {
  const docRef = collection(dbService, "mountainData");
  return await getDocs(docRef)
    .then((querySnapshot) => {
      let data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      return data;
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      return [];
    });
};

export default loadMountainData;
