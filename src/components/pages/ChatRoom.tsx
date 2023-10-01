import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Center, Flex, Spinner, Stack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { useUpdateMsg } from "../../hooks/useUpdateMsg";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useToastMsg } from "../../hooks/useToastMsg";

export const ChatRoom: FC = memo(() => {
  const once = useRef(false);
  const [message, setMessage] = useState("");
  const { users, getUsers, loading } = useGetUsers();
  const { updateMsg } = useUpdateMsg(message);
  const { showToastMsg } = useToastMsg();

  useEffect(
    () => (isMobile ? window.scrollTo(0, -100) : undefined),
    [isMobile]
  );

  useEffect(() => {
    getUsers();

    if (once.current) return;
    once.current = true;
    showToastMsg({
      status: "success",
      title: "マナーを守り、お楽しみください!",
    });
  }, []);

  const onClickPost = useCallback(() => {
    updateMsg();
    setMessage("");
  }, [message]);

  const onChangePost = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value),
    []
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" thickness="4px" color="gray.700" />
        </Center>
      ) : (
        <Box h="calc(100vh - 80px)">
          <Stack
            direction="row"
            align="center"
            maxW={{ base: "none", md: "800px" }}
            wrap="wrap"
            mx="auto"
            mt={{ base: "3", md: "5" }}
            h="80%"
          >
            <UserWindow users={users} />
          </Stack>
          <Flex
            direction="column"
            w={{ base: "90%", md: "60%" }}
            h="20%"
            mx="auto"
            mt={{ base: "3", md: "6" }}
          >
            <PrimaryInput
              onClickButton={onClickPost}
              onChange={onChangePost}
              buttonLabel="投稿"
              value={message}
            />
          </Flex>
        </Box>
      )}
    </>
  );
});
