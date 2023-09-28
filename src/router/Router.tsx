import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Top } from "../components/pages/Top";
import { ChatRoom } from "../components/pages/ChatRoom";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnlyLayout } from "../components/templates/HeaderOnlyLayout";
import { authState } from "../store/authState";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  const authInfo = useRecoilValue(authState);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        }
      />
      {authInfo.isAuth &&
        <Route
          path="/chatroom"
          element={
            <HeaderOnlyLayout>
              <ChatRoom />
            </HeaderOnlyLayout>
          }
        />
      }
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  );
});
