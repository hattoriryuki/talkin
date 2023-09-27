import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClickButton: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClickButton } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      fontSize={{ base: "sm", md: "md" }}
      size={{ base: "sm", md: "md" }}
      _hover={{ opacity: 0.8 }}
      onMouseDown={onClickButton}
    >
    {children}
  </Button>
  );
});
