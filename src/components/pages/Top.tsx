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
          h="100%"
          m={0}
        >
          <Box my={4} ml={20}>
            <Heading>とーきんへようこそ!</Heading>
            <Text w="480px" mt={4} fontSize="lg">
              このサービスは、気軽に匿名でチャットができるサービスです。
              面倒なユーザー登録等は必要ありません。<br />
              誹謗中傷等、相手を傷つける行為は全て禁止いたします。
            </Text>
          </Box>
        </Container>
        <Flex
          align="center"
          justify="center"
          w="100%"
          mt={6}
        >
          <UserWindow users={users} />
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align="end"
          h="100%"
          mt={6}
          p={4}
          pb="32px"
        >
          <Text fontWeight="bold" w="50%">
            チャットで使用する名前を入力して、はじめるボタンを押してください
          </Text>
          <Input placeholder="太郎" my={2} w="50%" />
          <PrimaryButton>はじめる</PrimaryButton>
        </Flex>
      </Stack>
    </>
  );
});
