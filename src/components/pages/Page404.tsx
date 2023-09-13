import { FC, memo } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

export const Page404: FC = memo(() => {
  return (
    <Container>
      <Box>
        <Heading>Error 404</Heading>
      </Box>
    </Container>
  );
});
