import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { userProfile } from "./types/userProfile";
import theme from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  const users: userProfile[] = [
    {
      name: "太郎",
      message: "ヾ(●´ω｀●)",
      uuid: "",
    },
    {
      name: "二郎",
      message: "こんにちは",
      uuid: "",
    },
    {
      name: "三郎",
      message: "三郎です!",
      uuid: "",
    },
    {
      name: "四郎",
      message: "",
      uuid: "",
    },
    {
      name: "五郎",
      message: "Hello!!!",
      uuid: "",
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <Router users={users} />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
