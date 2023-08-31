import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={3}
        h="60px"
      >
        <Heading
          fontWeight={900}
          letterSpacing="-0.07em"
          transform="scale(1, 0.7)"
          ml={6}
        >
          TALKIN
        </Heading>
      </Flex>
      <Box
        bg="teal.500"
        color="gray.50"
        position="fixed"
        bottom="0"
        w="100%"
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction="row"
          spacing={4}
          justify="center"
          align="center"
          gap={20}
        >
          <Stack direction={"row"} spacing={6}>
            <Box as="a" href={"#"}>
              利用規約
            </Box>
          </Stack>
          <Text>©︎ 2023 TALKIN. All rights reserved</Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
