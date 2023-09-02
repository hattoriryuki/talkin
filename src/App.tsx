import React from 'react';
import {
  Avatar,
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text
} from '@chakra-ui/react';

import { DefaultLayout } from './components/templates/DefaultLayout';
import speechBubbleImage from './assets/images/speech-bubble.png';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Flex
          h="calc(100vh - 110px)"
          color="gray.700"
          justify="space-around"
        >
          <Container
            as={Flex}
            direction="column"
            justify="space-between"
            h="100%"
            flex={0.6}
            m={0}
          >
            <Box my={4} flex={0.3}>
              <Heading>とーきんへようこそ!</Heading>
              <Text w="480px" mt={4} fontSize="lg">
                このサービスは、気軽に匿名でチャットができるサービスです。
                面倒なユーザー登録等は必要ありません。<br />
                誹謗中傷等、相手を傷つける行為は全て禁止いたします。
              </Text>
            </Box>
            <Flex flex={0.7} align="end" justify="space-between">
              <Box
                as={Flex}
                direction="column"
                border="1px black solid"
                flex={0.5}
                mr={6}
                h={250}
                position="relative"
                bottom={180}
                justify="space-between"
                py={4}
                boxSizing='border-box'
              >
                <Image src={speechBubbleImage}
                  alt=""
                  boxSize="200px"
                  mx="auto"
                />
                <Text
                  align="center"
                  position="absolute"
                  top="30%"
                  left="30%"
                >
                  ヾ(●´ω｀●)
                </Text>
                <Flex align="center" ml={4}>
                  <Avatar name="taro" />
                  <Text ml={2}>
                    太郎
                  </Text>
                </Flex>
              </Box>
              <Box
                as={Flex}
                direction="column"
                border="1px black solid"
                flex={0.5}
                m={8}
                h={250}
                justify="space-between"
                py={6}
                position="relative"
              >
                <Image src={speechBubbleImage}
                  alt=""
                  boxSize="200px"
                  mx="auto"
                />
                <Text
                  align="center"
                  position="absolute"
                  top="30%"
                  left="30%"
                >
                  こんにちは
                </Text>
                <Flex align="center" ml={4}>
                  <Avatar name="jiro" />
                  <Text ml={2}>
                    二郎
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Flex
            direction="column"
            justify="end"
            h="100%"
            p={4}
            pb="32px"
            flex={0.4}
          >
            <Text fontWeight="bold">
              チャットで使用する名前を入力して、はじめるボタンを押してください
            </Text>
            <Input placeholder="太郎" my={2} />
            <Box ml="auto">
              <PrimaryButton>はじめる</PrimaryButton>
            </Box>
          </Flex>
        </Flex>
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
