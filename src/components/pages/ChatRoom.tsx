import { FC, memo, useCallback } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { userProfile } from "../../types/userProfile";

export const ChatRoom: FC = memo(() => {
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

  const onClickPost = useCallback(() => console.log("post!!"), []);

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
          buttonLabel="投稿"
        />
      </Flex>
    </Box>
  );
});
