import { FC, ReactNode, memo } from "react";

import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { HamburgerMenu } from "../organisms/HamburgerMenu";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header>
        <HamburgerMenu />
      </Header>
      {children}
      <Footer />
    </>
  );
});
