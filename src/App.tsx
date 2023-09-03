import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';

import { DefaultLayout } from './components/templates/DefaultLayout';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { UserWindow } from './components/molucules/UserWindow';
import { userProfile } from './types/userProfile';

function App() {
  const users: userProfile[] = [
    {
      name: "太郎",
      text: "ヾ(●´ω｀●)"
    },
    {
      name: "二郎",
      text: "こんにちは"
    },
    {
      name: "三郎",
      text: ""
    },
    {
      name: "四郎",
      text: "こんちわ"
    },
    {
      name: "五郎",
      text: "Hello!!!"
    },
  ];

  return (
    <ChakraProvider>
      <DefaultLayout>
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
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
