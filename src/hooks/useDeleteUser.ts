import { useCallback } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue } from "recoil";

import { userState } from "../store/userState";
import { roomState } from "../store/roomState";

export const useDeleteUser = () => {
  const userInfo = useRecoilValue(userState);
  const roomName = useRecoilValue(roomState);

  const deleteUser = useCallback(async () => {
    await deleteDoc(doc(db, roomName, userInfo.uuid));
  }, [userInfo.uuid]);

  return { deleteUser };
};
