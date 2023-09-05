import { Input, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

type Props = {
  onClick: () => void;
  buttonLabel: string;
};

export const PrimaryInput: FC<Props> = memo((props) => {
  const { onClick, buttonLabel } = props;

  return (
    <Stack
      direction="row"
      align="center"
      justify="center"
      w="100%"
    >
      <Input
        placeholder="太郎"
        my={2}
        w={{ base: "90%", md: "100%" }}
        size={{ base: "sm", md: "md" }}
      />
      <PrimaryButton onClick={onClick}>
        {buttonLabel}
      </PrimaryButton>
    </Stack>
  );
});
