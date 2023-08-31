import { Flex, Heading } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children?: ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;

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
        letterSpacing="-0.07em"
        transform="scale(1, 0.7)"
        ml={6}
      >
        TALKIN
        {children}
      </Heading>
    </Flex>
  );
});
