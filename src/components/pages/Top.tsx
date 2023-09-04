import { FC, memo } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

import { UserWindow } from "../molucules/UserWindow";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { userProfile } from "../../types/userProfile";

type Props = {
  users: userProfile[];
};

export const Top: FC<Props> = memo((props) => {
  const { users } = props;

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
          <Stack 
            direction={{ base: "row", md: "column" }}
            align={{ base: "center", md: "end" }}
            justify="center"
            w="100%"
          >
            <Input
              placeholder="太郎"
              my={2}
              w={{ base: "90%", md: "50%" }}
              size={{ base: "sm", md: "md" }}
            />
            <PrimaryButton>はじめる</PrimaryButton>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
});
