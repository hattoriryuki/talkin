import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<any>>([]);

  const getUsers = () => {
    const userRef = collection(db, "users");

    onSnapshot(userRef, (QuerySnapshot) => {
      setUsers(
        QuerySnapshot.docs.map((doc) => doc.data())
      );
    });
  };

  return { users, getUsers };
};
