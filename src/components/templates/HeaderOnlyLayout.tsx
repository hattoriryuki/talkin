import { FC, ReactNode, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Header } from "../atoms/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { authState } from "../../store/authState";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { userState } from "../../store/userState";

type Props = {
  children: ReactNode;
};

export const HeaderOnlyLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(authState);
  const userInfo = useRecoilValue(userState);

  const onClickTop = useCallback(async () => {
    await deleteDoc(doc(db, "users", userInfo.uuid));
    setUserInfo({ isAuth: false });
    navigate("/");
  }, []);
  
  return (
    <>
      <Header>
        <PrimaryButton onClick={onClickTop}>
          退室する
        </PrimaryButton>
      </Header>
      {children}
    </>
  );
});
