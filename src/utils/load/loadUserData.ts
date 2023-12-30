import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { UserData } from "../../recoil/user";

const loadUserData = async (uid: string) => {
  const docRef = doc(dbService, "userData", uid);

  return getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        return data as UserData; // Return the document data if it exists
      } else {
        console.log("No such document!");
        return null; // Return null or handle the case when the document doesn't exist
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
      throw error; // Throw the error to be caught by the calling code
    });
};

export default loadUserData;
