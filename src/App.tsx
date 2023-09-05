import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { userProfile } from './types/userProfile';
import theme from './theme/theme';
import { Router } from './router/Router';

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
      text: "三郎です!"
    },
    {
      name: "四郎",
      text: ""
    },
    {
      name: "五郎",
      text: "Hello!!!"
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router users={users} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
