import { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/userState";

export const useAddUserToDB = (userName: string) => {
  const [uuid, setUuid] = useState(crypto.randomUUID());
  const setUserInfo = useSetRecoilState(userState);
  const navigate = useNavigate();

  const addUserToDB = useCallback(() => {
    if(userName) {
      setUserInfo({ isAuth: true });
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
