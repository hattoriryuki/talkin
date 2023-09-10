import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue } from "recoil";
import { userState } from "../store/userState";
import { useCallback } from "react";

export const useDeleteUser = () => {
  const userInfo = useRecoilValue(userState);

  const deleteUser = useCallback(async () => {
    await deleteDoc(doc(db, "users", userInfo.uuid));
  }, [userInfo.uuid])

  return { deleteUser };
};
