import { FC, ReactNode, memo, useCallback } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();

  const onClickTop = useCallback(() => navigate("/"), []);

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={3}
      h="60px"
    >
      <Heading
        fontWeight={900}
        fontSize={{ base: "3xl", md: "4xl" }}
        letterSpacing="-0.07em"
        transform="scale(1, 0.7)"
        ml={6}
        cursor="pointer"
        onClick={onClickTop}
      >
        TALKIN
      </Heading>
      {children}
    </Flex>
  );
});
