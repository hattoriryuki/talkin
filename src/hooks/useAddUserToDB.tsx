import { useCallback } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { db } from "../firebase";
import { authState } from "../store/authState";
import { userState } from "../store/userState";

export const useAddUserToDB = (userName: string) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setAuthInfo = useSetRecoilState(authState);
  const navigate = useNavigate();

  const addUserToDB = useCallback(async () => {
    if(userName) {
      setAuthInfo({ isAuth: true });
      setUserInfo({ uuid: crypto.randomUUID() });
      await setDoc(doc(db, "users", userInfo.uuid), {
        name: userName,
        message: "",
        createdAt: serverTimestamp()
      });
      navigate("/chatroom");
    } else {
      alert("ユーザー名を入力してください");
    }
  }, [userName, userInfo]);
  
  return { addUserToDB };
};
