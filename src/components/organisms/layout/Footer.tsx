import { FC, memo } from "react";
import { Box, Container, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { PrimaryModal } from "../PrimaryModal";
import { TermsContent } from "../../atoms/TermsContent";
import { PrivacyContent } from "../../atoms/PrivacyContent";

export const Footer: FC = memo(() => {
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
      <Box
        bg="teal.500"
        color="gray.50"
        position="fixed"
        bottom="0"
        w="100%"
        h="50px"
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction="row"
          justify="center"
          align="center"
          gap={{ base: "4", md: "20" }}
        >
          <Box as="a" href="#" onClick={onTermsOpen}>
            利用規約
          </Box>
          <Box as="a" href="#" onClick={onPrivacyOpen}>
            プライバシー
          </Box>
          <Text>&copy; 2023 TALKIN. All rights reserved</Text>
        </Container>
      </Box>
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
