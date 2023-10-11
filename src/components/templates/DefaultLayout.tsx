import { FC, ReactNode, memo } from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";

import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { PrimaryModal } from "../organisms/PrimaryModal";
import { TermsContent } from "../atoms/TermsContent";
import { PrivacyContent } from "../atoms/PrivacyContent";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const {
    isOpen: isTermsOpen,
    onOpen: onTermsOpen,
    onClose: onTermsClose,
  } = useDisclosure();

  const {
    isOpen: isPrivacyOpen,
    onOpen: onPrivacyOpen,
    onClose: onPrivacyClose,
  } = useDisclosure();

  return (
    <>
      <Header>
        <Menu>
          <MenuButton mr={8}>
            <HamburgerIcon boxSize={8} />
          </MenuButton>
          <MenuList color="gray.800">
            <MenuItem onClick={onTermsOpen}>利用規約</MenuItem>
            <MenuItem onClick={onPrivacyOpen}>プライバシー</MenuItem>
          </MenuList>
        </Menu>
      </Header>
      {children}
      <Footer />

      <PrimaryModal
        isOpen={isTermsOpen}
        onClose={onTermsClose}
        header="利用規約"
      >
        <TermsContent />
      </PrimaryModal>
      <PrimaryModal
        isOpen={isPrivacyOpen}
        onClose={onPrivacyClose}
        header="プライバシーポリシー"
      >
        <PrivacyContent />
      </PrimaryModal>
    </>
  );
});
