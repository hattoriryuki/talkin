import { useCallback } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { db } from "../firebase";

import { userState } from "../store/userState";
import { roomState } from "../store/roomState";

export const useUpdateMsg = () => {
  const userInfo = useRecoilValue(userState);
  const roomName = useRecoilValue(roomState);

  const updateMsg = useCallback(async (message: string) => {
    const userRef = doc(db, roomName, userInfo.uuid);
    await updateDoc(userRef, {
      message,
    });
  }, []);

  return { updateMsg };
};
