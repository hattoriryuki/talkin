import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { userProfile } from "../../types/userProfile";
import { useAddMsgToDB } from "../../hooks/useAddMsgToDB";

export const ChatRoom: FC = memo(() => {
  const [message, setMessage] = useState("");
  const { addMsgToDB } = useAddMsgToDB(message);
  const users: userProfile[] = [
    {
      name: "太郎",
      text: "太郎です"
    },
    {
      name: "二郎",
      text: "二郎です"
    },
    {
      name: "三郎",
      text: "三郎です"
    },
    {
      name: "四郎",
      text: "四郎です"
    },
    {
      name: "五郎",
      text: "五郎です"
    }
  ];

  const onClickPost = useCallback(() => {
    addMsgToDB();
    setMessage("");
  }, [message]);

  const onChangePost = 
    useCallback((e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value), []);

  return (
    <Box h="calc(100vh - 80px)">
      <Stack
        direction="row"
        align="center"
        maxW={{ base: "none", md: "800px" }}
        wrap="wrap"
        mx="auto"
        mt={5}
        h="80%"
      >
        <UserWindow users={users} />
      </Stack>
      <Flex
        direction="column"
        w={{ base: "90%", md: "60%" }}
        h="20%"
        mx="auto"
        justify="center"
      >
        <PrimaryInput
          onClick={onClickPost}
          onChange={onChangePost}
          buttonLabel="投稿"
          value={message}
        />
      </Flex>
    </Box>
  );
});
