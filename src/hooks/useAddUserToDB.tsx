import { useCallback } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { db } from "../firebase";

import { authState } from "../store/authState";
import { userState } from "../store/userState";
import { useToastMsg } from "./useToastMsg";

export const useAddUserToDB = (userName: string) => {
  const userInfo = useRecoilValue(userState);
  const setAuthInfo = useSetRecoilState(authState);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const addUserToDB = useCallback(async () => {
    if(userName) {
      setAuthInfo({ isAuth: true });
      await setDoc(doc(db, "users", userInfo.uuid), {
        name: userName,
        message: "",
        createdAt: serverTimestamp(),
        uuid: userInfo.uuid
      });
      navigate("/chatroom");
    } else {
      showToastMsg({
        title: "ユーザー名を入力してください",
        status: "error"
      });
    }
  }, [userName, userInfo]);
  
  return { addUserToDB };
};
