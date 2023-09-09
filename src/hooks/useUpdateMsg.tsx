import { useCallback } from "react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { db } from "../firebase";

import { userState } from "../store/userState";

export const useUpdateMsg = (message: string) => {
  const userInfo = useRecoilValue(userState);

  const updateMsg = useCallback(async () => {
    const userRef = doc(db, "users", userInfo.uuid);

    await updateDoc(userRef, {
      message,
      createdAt: serverTimestamp()
    });
  }, [message]);

  return { updateMsg };
};
