import { useCallback } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilState } from "recoil";

import { roomState } from "../store/roomState";

export const useSelectRoom = () => {
  const [roomName, setRoomName] = useRecoilState(roomState);

  const selectRoom = useCallback( async () => {
    const coll = collection(db, roomName);
    const snapshot = (await getCountFromServer(coll)).data().count;
    setRoomName(snapshot >= 6 ? "room2" : "users");
  }, []);

  return { selectRoom };
};
