import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { ChatRoom } from "../components/pages/ChatRoom";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { userProfile } from "../types/userProfile";

type Props = {
  users: userProfile[];
};

export const Router: FC<Props> = memo((props) => {
  const { users } = props;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Top users={users} />
          </DefaultLayout>
        }
      />
      <Route
        path="/chatroom"
        element={
          <ChatRoom />
        }
      />
    </Routes>
  );
});
