import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Center, Flex, Spinner, Stack, Tag } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useRecoilValue } from "recoil";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { useUpdateMsg } from "../../hooks/useUpdateMsg";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useToastMsg } from "../../hooks/useToastMsg";
import { roomState } from "../../store/roomState";
import { useDeleteUser } from "../../hooks/useDeleteUser";

export const ChatRoom: FC = memo(() => {
  const once = useRef(false);
  const [message, setMessage] = useState("");
  const { users, getUsers, loading } = useGetUsers();
  const { updateMsg } = useUpdateMsg();
  const { showToastMsg } = useToastMsg();
  const { deleteUser } = useDeleteUser();
  const roomName = useRecoilValue(roomState);

  useEffect(() => (isMobile ? window.scrollTo(0, -100) : undefined), []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => deleteUser());
    getUsers();

    if (once.current) return;
    once.current = true;
    showToastMsg({
      status: "success",
      title: "マナーを守り、お楽しみください!",
    });

    return () => {
      window.removeEventListener("beforeunload", () => deleteUser());
    };
  }, []);

  const onClickPost = useCallback(() => {
    updateMsg("");
  }, [message, updateMsg]);

  const onChangePost = (e: ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    updateMsg(newMessage);
  };

  const onBlur = () => {
    isMobile && window.scrollTo(0, -100);
    setMessage("");
  };

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" thickness="4px" color="gray.700" />
        </Center>
      ) : (
        <Box h="calc(100vh - 60px)">
          <Box
            position={{ base: "static", md: "absolute" }}
            top="70px"
            left={{ base: "0", md: "15%" }}
            fontWeight={800}
            color="gray.700"
            ml={{ base: "2", md: "0" }}
            mt={{ base: "2", md: "0" }}
          >
            <Tag fontSize="xl" color="gray.700" p={1}>
              {roomName}
            </Tag>
          </Box>
          <Stack
            direction="row"
            align="center"
            maxW={{ base: "none", md: "800px" }}
            wrap="wrap"
            mx="auto"
            mt={{ base: "3", md: "2" }}
            h="80%"
          >
            <UserWindow users={users} />
          </Stack>
          <Flex
            direction="column"
            justify={{ base: "start", md: "center" }}
            w={{ base: "90%", md: "60%" }}
            h="20%"
            mx="auto"
            mt={{ base: "3", md: "0" }}
          >
            <PrimaryInput
              onClickButton={onClickPost}
              onChange={onChangePost}
              onBlur={onBlur}
              buttonLabel="クリア"
              value={message}
            />
          </Flex>
        </Box>
      )}
    </>
  );
});
