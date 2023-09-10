import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useState
} from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { useUpdateMsg } from "../../hooks/useUpdateMsg";
import { useGetUsers } from "../../hooks/useGetUsers";

export const ChatRoom: FC = memo(() => {
  const [message, setMessage] = useState("");
  const { users, getUsers } = useGetUsers();
  const { updateMsg } = useUpdateMsg(message);

  useEffect(() => getUsers(), [message]);
  
  const onClickPost = useCallback(() => {
    updateMsg();
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
        mt={6}
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
