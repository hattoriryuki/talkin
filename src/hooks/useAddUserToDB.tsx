import { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const useAddUserToDB = (userName: string) => {
  const [uuid, setUuid] = useState(crypto.randomUUID());

  const addUserToDB = useCallback(() => {
    setUuid(crypto.randomUUID());
    addDoc(collection(db, "users"), {
      name: userName,
      uuid
    });  
  }, [userName, uuid]);
  return { addUserToDB };
};
