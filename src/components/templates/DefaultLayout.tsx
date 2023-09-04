import { FC, ReactNode, memo } from "react";

import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
