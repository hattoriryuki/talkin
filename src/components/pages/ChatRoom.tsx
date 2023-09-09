import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useState
} from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { useUpdateMsg } from "../../hooks/useUpdateMsg";

export const ChatRoom: FC = memo(() => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<Array<any>>([]);
  const { updateMsg } = useUpdateMsg(message);

  useEffect(() => {
    const userRef = collection(db, "users");

    onSnapshot(userRef, (QuerySnapshot) => {
      setUsers(
        QuerySnapshot.docs.map((doc) => doc.data())
      );
    });
  }, [message]);
  
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
