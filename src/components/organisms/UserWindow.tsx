import { FC, memo } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import speechBubbleImage from "../../assets/images/speech-bubble.png";
import { userProfile } from "../../types/userProfile";
import { userState } from "../../store/userState";

type Props = {
  users: userProfile[];
};

export const UserWindow: FC<Props> = memo((props) => {
  const { users } = props;
  const userInfo = useRecoilValue(userState);

  return (
    <>
      {users.map((user, index) => (
        <Box
          key={index}
          as={Flex}
          direction="column"
          border="1px black solid"
          mx={4}
          mb={{ base: "2", md: "0" }}
          h={{ base: "150", md: "250" }}
          w={{ base: "40%", md: "210px" }}
          position="relative"
          py={{ base: "1", md: "3" }}
        >
          {user.uuid === userInfo.uuid &&
            <Heading fontSize="sm" px={1}>あなた</Heading>
          }
          <Image src={speechBubbleImage}
            alt=""
            w={{ base: "90%", md: "200px" }}
            h={{ base: "80%", md: "168px" }}
            mx="auto"
          />
          <Text
            align="center"
            position="absolute"
            top="30%"
            left="30%"
            fontSize={{ base: "sm", md: "md" }}
          >
            {user.message}
          </Text>
          <Flex align="center" ml={4}>
            <Avatar
              name={user.name}
              size={{ base: "xs", md: "md" }}
            />
            <Text ml={2}>
              {user.name}
            </Text>
          </Flex>
        </Box>
      ))}
    </>
  );
});
