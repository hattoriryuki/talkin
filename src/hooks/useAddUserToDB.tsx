import { useCallback } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { db } from "../firebase";
import { authState } from "../store/authState";
import { userState } from "../store/userState";

export const useAddUserToDB = (userName: string) => {
  const [uuid, setUuid] = useRecoilState(userState);
  const setUserInfo = useSetRecoilState(authState);
  const navigate = useNavigate();

  const addUserToDB = useCallback(() => {
    if(userName) {
      setUserInfo({ isAuth: true });
      setUuid({ uuid: crypto.randomUUID() });
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
