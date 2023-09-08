import { FC, ReactNode, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { Header } from "../atoms/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { authState } from "../../store/authState";

type Props = {
  children: ReactNode;
};

export const HeaderOnlyLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(authState);

  const onClickTop = useCallback(() => {
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
