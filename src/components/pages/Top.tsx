import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isMobile } from "react-device-detect";

import { UserWindow } from "../organisms/UserWindow";
import { PrimaryInput } from "../molucules/PrimaryInput";
import { useAddUserToDB } from "../../hooks/useAddUserToDB";
import { authState } from "../../store/authState";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { userArray } from "../../store/data/userArray";
import { roomState } from "../../store/roomState";
import { useSelectRoom } from "../../hooks/useSelectRoom";

export const Top: FC = memo(() => {
  const [userName, setUserName] = useState("");
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const roomName = useRecoilValue(roomState);

  const { addUserToDB } = useAddUserToDB(userName);
  const { deleteUser } = useDeleteUser();
  const { selectRoom } = useSelectRoom();

  const users = isMobile
    ? [...userArray]
    : [...userArray, { name: "五郎", message: "五郎です", uuid: "" }];

  useEffect(() => {
    if (authInfo.isAuth) {
      deleteUser();
      setAuthInfo({ isAuth: false });
    }
  }, [deleteUser, setAuthInfo]);

  useEffect(() => {
    selectRoom();
  }, [roomName, selectRoom]);

  const onClickChatRoom = useCallback(() => addUserToDB(), [addUserToDB]);

  const onChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value),
    []
  );

  const onBlur = () => isMobile && window.scrollTo(0, -100);

  return (
    <>
      <Stack
        h="calc(100vh - 110px)"
        boxSizing="border-box"
        color="gray.700"
        overflow="scroll"
      >
        <Container as={Flex} direction="column" justify="space-between" m={0}>
          <Box my={{ base: "2", md: "4" }} mx={{ base: "0", md: "20" }}>
            <Heading fontSize={{ base: "xl", md: "4xl" }}>
              とーきんへようこそ!
            </Heading>
            <Text
              w={{ base: "100%", md: "480px" }}
              mt={{ base: "2", md: "4" }}
              fontSize={{ base: "sm", md: "lg" }}
            >
              このサービスは、気軽に匿名でチャットができるサービスです。
              面倒なユーザー登録等は必要ありません。
              <br />
              誹謗中傷等、相手を傷つける行為は全て禁止いたします。
            </Text>
          </Box>
        </Container>
        <Flex
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
          my={{ base: "0", md: "2" }}
        >
          <UserWindow users={users} />
        </Flex>
        <Flex
          direction="column"
          justify={{ base: "start", md: "center" }}
          align="end"
          px={4}
          mr={{ base: "0", md: "10" }}
          h="100%"
        >
          <Text fontWeight="bold" w={{ base: "100%", md: "50%" }}>
            チャットで使用する名前を入力してください
          </Text>
          <Box w={{ base: "100%", md: "50%" }} mb={{ base: "10", md: "0" }}>
            <PrimaryInput
              onClickButton={onClickChatRoom}
              onChange={onChangeName}
              onBlur={onBlur}
              buttonLabel="はじめる"
              value={userName}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
});
