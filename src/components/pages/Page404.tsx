import { FC, memo } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Page404: FC = memo(() => {
  const navigate = useNavigate();

  const onClickTop = () => navigate("/");

  return (
    <Container
      h="100vh"
      color="#888"
    >
      <Box
        as={Flex}
        h="100%"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading
          fontSize="6xl"
          fontFamily="Lato, sans-serif"
          mb={8}
        >
          Error 404
        </Heading>
        <Link onClick={onClickTop}>
          トップへ
        </Link>
      </Box>
    </Container>
  );
});
