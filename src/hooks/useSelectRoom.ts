import { useCallback } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";
import { useSetRecoilState } from "recoil";

import { roomState } from "../store/roomState";

export const useSelectRoom = () => {
  const setRoomName = useSetRecoilState(roomState);
  const selectRoom = useCallback(async () => {
    let i = 1;
    while (i) {
      const coll = collection(db, `room${i}`);
      const snapshot = (await getCountFromServer(coll)).data().count;

      if (snapshot <= 5) break;
      i++;
    }
    setRoomName(`room${i}`);
  }, []);

  return { selectRoom };
};
