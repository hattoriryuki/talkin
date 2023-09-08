import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue } from "recoil";
import { userState } from "../store/userState";

export const useAddMsgToDB = (message: string) => {
  const userInfo = useRecoilValue(userState);

  const addMsgToDB = async () => {
    await addDoc(collection(db, "messages"), {
      message,
      uuid: userInfo.uuid,
      createdAt: serverTimestamp()
    });
  };
  return {addMsgToDB};
};
