import { FC, memo } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

import speechBubbleImage from "../../assets/images/speech-bubble.png";
import { userProfile } from "../../types/userProfile";

type Props = {
  users: userProfile[];
};

export const UserWindow: FC<Props> = memo((props) => {
  const { users } = props;

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
          py={{ base: "2", md: "4" }}
        >
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
