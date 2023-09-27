import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    const userRef = collection(db, "users");
    setLoading(true);

    onSnapshot(userRef, (QuerySnapshot) => {
      setUsers(QuerySnapshot.docs.map((doc) => doc.data()));
    });

    setLoading(false);
  };

  return { users, getUsers, loading };
};
