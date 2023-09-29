import { useCallback, useState } from "react";
import { collection, doc, serverTimestamp, setDoc, getCountFromServer } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { db } from "../firebase";

import { authState } from "../store/authState";
import { userState } from "../store/userState";
import { useToastMsg } from "./useToastMsg";
import { useSelectRoom } from "./useSelectRoom";

export const useAddUserToDB = (userName: string) => {
  const userInfo = useRecoilValue(userState);
  const setAuthInfo = useSetRecoilState(authState);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();
  const { roomName } = useSelectRoom();

  const addUserToDB = async () => {
    if(userName) {
      setAuthInfo({ isAuth: true });

      await setDoc(doc(db, roomName, userInfo.uuid), {
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
  };
  
  return { addUserToDB };
};
