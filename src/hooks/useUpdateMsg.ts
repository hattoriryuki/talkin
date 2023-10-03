import { useCallback } from "react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { db } from "../firebase";

import { userState } from "../store/userState";
import { roomState } from "../store/roomState";

export const useUpdateMsg = (message: string) => {
  const userInfo = useRecoilValue(userState);
  const roomName = useRecoilValue(roomState);

  const updateMsg = useCallback(async () => {
    const userRef = doc(db, roomName, userInfo.uuid);
    await updateDoc(userRef, {
      message,
      createdAt: serverTimestamp(),
    });
  }, [message, roomName]);

  return { updateMsg };
};
