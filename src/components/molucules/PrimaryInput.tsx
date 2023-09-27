import { Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

type Props = {
  onClick: () => void;
  buttonLabel: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const PrimaryInput: FC<Props> = memo((props) => {
  const { onClick, onChange, buttonLabel, value } = props;
  const onBlur = () => window.scrollTo({ top: 0 });

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
      <PrimaryButton onClick={onClick}>{buttonLabel}</PrimaryButton>
    </Stack>
  );
});
