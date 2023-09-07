import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Top } from "../components/pages/Top";
import { ChatRoom } from "../components/pages/ChatRoom";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { userProfile } from "../types/userProfile";
import { HeaderOnlyLayout } from "../components/templates/HeaderOnlyLayout";
import { userState } from "../store/userState";

type Props = {
  users: userProfile[];
};

export const Router: FC<Props> = memo((props) => {
  const { users } = props;
  const userInfo = useRecoilValue(userState);

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
      {userInfo.isAuth &&
        <Route
          path="/chatroom"
          element={
            <HeaderOnlyLayout>
              <ChatRoom />
            </HeaderOnlyLayout>
          }
        />
      }
    </Routes>
  );
});
