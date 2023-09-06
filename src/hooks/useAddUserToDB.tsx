import { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";

export const useAddUserToDB = (userName: string) => {
  const [uuid, setUuid] = useState(crypto.randomUUID());
  const navigate = useNavigate();

  const addUserToDB = useCallback(() => {
    if(userName) {
      setUuid(crypto.randomUUID());
      addDoc(collection(db, "users"), {
        name: userName,
        uuid
      });
      navigate("/chatroom");
    } else {
      alert("ユーザー名を入力してください");
    }
  }, [userName, uuid]);
  
  return { addUserToDB };
};
