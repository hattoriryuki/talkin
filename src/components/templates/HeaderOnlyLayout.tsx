import { FC, ReactNode, memo, useCallback } from "react";

import { Header } from "../atoms/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const HeaderOnlyLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();

  const onClickTop = useCallback(() => 
    navigate("/"),
  []);
  
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
