import { FC, memo } from "react";
import {
  Box,
  Link,
  ListItem,
  ListItemProps,
  UnorderedList,
} from "@chakra-ui/layout";

export const PrivacyContent: FC = memo(() => {
  const PrimaryListItem: FC<ListItemProps> = (props) => {
    return <ListItem my={2} {...props} />;
  };

  return (
    <Box ml={{ base: 4, md: 8 }}>
      <UnorderedList fontSize="lg" listStyleType="none" m={0}>
        <PrimaryListItem>
          当サイトは、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。
        </PrimaryListItem>
        <PrimaryListItem>
          Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。
        </PrimaryListItem>
        <PrimaryListItem>
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </PrimaryListItem>
        <PrimaryListItem>
          Cookieを無効にすれば、これらの情報の収集を拒否することができます。
        </PrimaryListItem>
        <PrimaryListItem>
          詳しくはお使いのブラウザの設定をご確認ください。
        </PrimaryListItem>
      </UnorderedList>
      本サービスに関するお問い合わせは、下記TwitterアカウントのDMまでお願いいたします。
      <br />
      <Link
        href="https://twitter.com/messages/compose?recipient_id=1457235129190223872"
        target="_blank"
        color="teal.500"
      >
        @ryuki_runteq_27
      </Link>
      <Box mt={4}>以上</Box>
    </Box>
  );
});
