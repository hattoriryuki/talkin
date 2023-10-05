import { useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilValue } from "recoil";

import { roomState } from "../store/roomState";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const roomName = useRecoilValue(roomState);

  const getUsers = () => {
    setLoading(true);

    const userRef = collection(db, roomName);
    const q = query(userRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (QuerySnapshot) => {
      setUsers(QuerySnapshot.docs.map((doc) => doc.data()));
    });

    setLoading(false);
  };

  return { users, getUsers, loading };
};
