import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { DefaultLayout } from './components/templates/DefaultLayout';
import { userProfile } from './types/userProfile';
import { Top } from './components/pages/Top';

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
        <Top users={users} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
