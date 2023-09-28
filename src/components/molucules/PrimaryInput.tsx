import { ChangeEvent, FC, memo, useCallback } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

type Props = {
  onClickButton: () => void;
  buttonLabel: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const PrimaryInput: FC<Props> = memo((props) => {
  const { onClickButton, onChange, buttonLabel, value } = props;
  const onBlur = useCallback(
    () => isMobile && window.scrollTo(0, -100),
    [isMobile]
  );

  return (
    <Stack direction="row" align="center" justify="center" w="100%">
      <Input
        placeholder="太郎"
        my={2}
        w={{ base: "90%", md: "100%" }}
        size={{ base: "sm", md: "md" }}
        fontSize="16px"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <PrimaryButton onClickButton={onClickButton}>{buttonLabel}</PrimaryButton>
    </Stack>
  );
});
