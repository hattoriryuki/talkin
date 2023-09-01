import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text
} from '@chakra-ui/react';

import { DefaultLayout } from './components/templates/DefaultLayout';
import speechBubbleImage from "./assets/images/speech-bubble.png";

function App() {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Flex
          h={"calc(100vh - 110px)"}
          justify={"flex-start"}
          color={"gray.700"}
        >
          <Container
            as={Flex}
            direction={"column"}
            justify={"space-between"}
            h={"100%"}
          >
            <Box my={4} flex={0.3}>
              <Heading>とーきんへようこそ!</Heading>
              <Text w={"480px"} mt={4} fontSize={"lg"}>
                このサービスは、気軽に匿名でチャットができるサービスです。
                面倒なユーザー登録等は必要ありません。<br />
                誹謗中傷等、相手を傷つける行為は全て禁止いたします。
              </Text>
            </Box>
            <Flex flex={0.7} align={"end"}>
              <Box
                as={Flex}
                direction={"column"}
                border={"1px black solid"}
                flex={"0.5"}
                m={8}
                h={250}
                position={"relative"}
                bottom={180}
                justify={"space-between"}
                py={4}
              >
                <Image src={speechBubbleImage}
                  alt=""
                  boxSize={"200px"}
                  mx={"auto"}
                />
                <Text
                  align={"center"}
                  position={"absolute"}
                  top={"30%"}
                  left={"30%"}
                >
                  ヾ(●´ω｀●)
                </Text>
                <Flex align={"center"} ml={4}>
                  <Avatar name={"taro"} />
                  <Text ml={2}>太郎</Text>
                </Flex>
              </Box>
              <Box
                as={Flex}
                direction={"column"}
                border={"1px black solid"}
                flex={"0.5"}
                m={8}
                h={250}
                justify={"space-between"}
                py={6}
                position={"relative"}
              >
                <Image src={speechBubbleImage}
                  alt=""
                  boxSize={"200px"}
                  mx={"auto"}
                />
                <Text
                  align={"center"}
                  position={"absolute"}
                  top={"30%"}
                  left={"30%"}
                >
                  こんにちは
                </Text>
                <Flex align={"center"} ml={4}>
                  <Avatar name={"jiro"} />
                  <Text ml={2}>二郎</Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Flex
            direction={"column"}
            justify={"end"}
            align={"end"}
            h={"100%"}
            p={4}
          >
            <Text fontWeight={"bold"}>
              チャットで使用する名前を入力して、はじめるボタンを押してください
            </Text>
            <Input placeholder={"太郎"} m={2} />
            <Button
              bg={"teal.400"}
              color={"white"}
              _hover={{ opacity: 0.8 }}
            >
              はじめる
            </Button>
          </Flex>
        </Flex>
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
