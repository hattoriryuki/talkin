import { ChangeEvent, FC, memo } from "react";
import { Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

type Props = {
  onClickButton: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  buttonLabel: string;
  value: string;
};

export const PrimaryInput: FC<Props> = memo((props) => {
  const { onClickButton, onChange, onBlur, buttonLabel, value } = props;

  return (
    <Stack direction="row" align="center" justify="center" w="100%">
      <Input
        placeholder="太郎"
        my={2}
        w={{ base: "90%", md: "100%" }}
        size={{ base: "sm", md: "md" }}
        fontSize="16px"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <PrimaryButton onClickButton={onClickButton}>{buttonLabel}</PrimaryButton>
    </Stack>
  );
});
