import { useCallback, useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";

export const useSelectRoom = () => {
  const [roomName, setRoomName] = useState("users");

  const selectRoom = useCallback(async () => {
    const coll = collection(db, roomName);
    const snapshot = await getCountFromServer(coll);
    snapshot.data().count <= 6 && setRoomName("room2");
  }, []);

  useEffect(() => {
    selectRoom();
  }, []);

  return { roomName };
};
