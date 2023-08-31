import { FC, memo } from "react";
import { Box, Container, Stack, Text } from "@chakra-ui/react";

export const Footer: FC = memo(() => {
  return (
    <Box
    bg="teal.500"
    color="gray.50"
    position="fixed"
    bottom="0"
    w="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction="row"
        spacing={4}
        justify="center"
        align="center"
        gap={20}
      >
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"#"}>
            利用規約
          </Box>
        </Stack>
        <Text>©︎ 2023 TALKIN. All rights reserved</Text>
      </Container>
    </Box>
  );
});
