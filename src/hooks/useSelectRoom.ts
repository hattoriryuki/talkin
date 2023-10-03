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
    let lengthArr: number[] = [];

    if (!authInfo.isAuth) {
      for (let i = 1; i <= 10; i++) {
        const coll = collection(db, `room${i}`);
        const snapshot = (await getCountFromServer(coll)).data().count;

        lengthArr = [...lengthArr, snapshot];
      }
      lengthArr.some((length, index) => {
        if (length < 6) {
          setRoomName(`room${index + 1}`);
          return true;
        }
      });
    }
  }, []);

  return { selectRoom };
};
