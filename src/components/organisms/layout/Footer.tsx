import { FC, memo } from "react";
import { Box, Container, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { TermsModal } from "../TermsModal";

export const Footer: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Box as="a" href="#" onClick={onOpen}>
            利用規約
          </Box>
          <Text>&copy; 2023 TALKIN. All rights reserved</Text>
        </Container>
      </Box>
      <TermsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
