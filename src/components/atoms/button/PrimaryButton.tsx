import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      fontSize={{ base: "sm", md: "md" }}
      size={{ base: "sm", md: "md" }}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
    {children}
  </Button>
  );
});
