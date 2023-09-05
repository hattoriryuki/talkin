import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";

import { UserWindow } from "../organisms/UserWindow";
import { userProfile } from "../../types/userProfile";
import { PrimaryInput } from "../molucules/PrimaryInput";

type Props = {
  users: userProfile[];
};

export const Top: FC<Props> = memo((props) => {
  const { users } = props;
  const navigate = useNavigate();

  const onClickChatRoom = useCallback(() =>
    navigate("/chatroom"),
  []);

  return (
    <>
      <Stack
        h="calc(100vh - 110px)"
        color="gray.700"
      >
        <Container
          as={Flex}
          direction="column"
          justify="space-between"
          m={0}
        >
          <Box
            my={{ base: "2", md: "4" }}
            mx={{ base: "0", md: "20" }}
          >
            <Heading fontSize={{ base: "xl", md: "4xl" }}>
              とーきんへようこそ!
            </Heading>
            <Text
              w={{ base: "100%", md: "480px" }}
              mt={{ base: "2", md: "4" }}
              fontSize={{ base: "sm", md: "lg" }}
            >
              このサービスは、気軽に匿名でチャットができるサービスです。
              面倒なユーザー登録等は必要ありません。<br />
              誹謗中傷等、相手を傷つける行為は全て禁止いたします。
            </Text>
          </Box>
        </Container>
        <Flex
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
          mt={{ base: "0", md: "6" }}
        >
          <UserWindow users={users} />
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align="end"
          h="100%"
          px={4}
        >
          <Text fontWeight="bold" w={{ base: "100%", md: "50%" }}>
            チャットで使用する名前を入力してください
          </Text>
          <Box w={{ base: "100%", md: "50%" }}>
            <PrimaryInput
              onClick={onClickChatRoom}
              buttonLabel="はじめる"
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
});
