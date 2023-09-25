import { FC, ReactNode, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { Header } from "../organisms/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { authState } from "../../store/authState";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { useToastMsg } from "../../hooks/useToastMsg";

type Props = {
  children: ReactNode;
};

export const HeaderOnlyLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(authState);
  const { deleteUser } = useDeleteUser();
  const { showToastMsg } = useToastMsg();

  const onClickTop = useCallback(() => {
    deleteUser();
    setUserInfo({ isAuth: false });
    navigate("/");
    showToastMsg({ title: "チャットルームを退室しました", status: "info" });
  }, []);

  return (
    <>
      <Header>
        <PrimaryButton onClick={onClickTop}>退室する</PrimaryButton>
      </Header>
      {children}
    </>
  );
});
