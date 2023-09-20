import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Helmet } from "react-helmet";

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
          <Helmet>
            <meta property="og:title" content="TALKIN" />
            <meta property="og:type" content="article" />
            <meta
              property="og:image"
              content="https://talkin-app-49247.web.app/public/ogp.png"
            />
            <meta
              property="og:url"
              content="https://talkin-app-49247.web.app/"
            />
            <meta
              property="og:description"
              content="匿名で気軽にチャットができるサービスです"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ryuki_runteq_27" />
          </Helmet>
          <Router users={users} />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
