import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { DefaultLayout } from './components/templates/DefaultLayout';

function App() {
  return (
    <ChakraProvider>
      <DefaultLayout>
        
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
