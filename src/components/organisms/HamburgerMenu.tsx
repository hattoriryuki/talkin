import { FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuGroupProps,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { useDisclosure } from "@chakra-ui/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Text } from "@chakra-ui/layout";

import { PrimaryModal } from "./PrimaryModal";
import { TermsContent } from "../atoms/TermsContent";
import { PrivacyContent } from "../atoms/PrivacyContent";

export const HamburgerMenu = () => {
  const PrimaryMenuGroup: FC<MenuGroupProps> = (props) => {
    return <MenuGroup color="#0a2463" {...props} />;
  };
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

  const shareURL = `http://twitter.com/share?url=https://talkin-app-49247.web.app/
    &text=みんなでお喋りしよう！
    &hashtags=TALKIN`;

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton mr={8}>
          <HamburgerIcon boxSize={8} />
        </MenuButton>
        <MenuList color="gray.700">
          <PrimaryMenuGroup title="Rules">
            <MenuItem onClick={onTermsOpen}>利用規約</MenuItem>
            <MenuItem onClick={onPrivacyOpen}>プライバシー</MenuItem>
          </PrimaryMenuGroup>
          <MenuDivider />
          <PrimaryMenuGroup title="Creator">
            <MenuItem
              as="a"
              href="http://twitter.com/ryuki_runteq_27"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              <Text ml={3}>X-Twitter</Text>
            </MenuItem>
            <MenuItem
              as="a"
              href="https://github.com/hattoriryuki"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <Text ml={3}>GitHub</Text>
            </MenuItem>
          </PrimaryMenuGroup>
          <MenuDivider />
          <PrimaryMenuGroup title="Share">
            <MenuItem as="a" href={shareURL} target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
              <Text ml={3}>共有する</Text>
            </MenuItem>
          </PrimaryMenuGroup>
        </MenuList>
      </Menu>
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
};
