import { useCallback } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { roomState } from "../store/roomState";
import { authState } from "../store/authState";

export const useSelectRoom = () => {
  const setRoomName = useSetRecoilState(roomState);
  const authInfo = useRecoilValue(authState);

  const selectRoom = useCallback(async () => {
    const coll = collection(db, "room1");
    const snapshot = (await getCountFromServer(coll)).data().count;
    authInfo.isAuth || setRoomName(snapshot >= 6 ? "room2" : "room1");
  }, []);

  return { selectRoom };
};
