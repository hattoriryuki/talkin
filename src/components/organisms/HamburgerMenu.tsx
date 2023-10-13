import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { useDisclosure } from "@chakra-ui/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import { PrimaryModal } from "./PrimaryModal";
import { TermsContent } from "../atoms/TermsContent";
import { PrivacyContent } from "../atoms/PrivacyContent";
import { Center, Flex, Link, Text } from "@chakra-ui/layout";

export const HamburgerMenu = () => {
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
      <Menu>
        <MenuButton mr={8}>
          <HamburgerIcon boxSize={8} />
        </MenuButton>
        <MenuList color="gray.800">
          <MenuGroup title="Rules">
            <MenuItem onClick={onTermsOpen}>利用規約</MenuItem>
            <MenuItem onClick={onPrivacyOpen}>プライバシー</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Creator">
            <MenuItem
              as="a"
              href="http://twitter.com/ryuki_runteq_27"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              <Text ml={3}>X-Twitter</Text>
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon icon={faGithub} />
              <Text ml={3}>GitHub</Text>
            </MenuItem>
          </MenuGroup>
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
