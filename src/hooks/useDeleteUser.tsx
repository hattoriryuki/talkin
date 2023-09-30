import { useCallback, useEffect } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue } from "recoil";

import { userState } from "../store/userState";
import { roomState } from "../store/roomState";
import { useSelectRoom } from "./useSelectRoom";

export const useDeleteUser = () => {
  const userInfo = useRecoilValue(userState);
  const roomName = useRecoilValue(roomState);
  const { selectRoom } = useSelectRoom();

  useEffect(() => {
    selectRoom();
  }, []);

  const deleteUser = useCallback(async () => {
    await deleteDoc(doc(db, roomName, userInfo.uuid));
  }, [userInfo.uuid]);

  return { deleteUser };
};
