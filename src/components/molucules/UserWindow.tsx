import { FC, memo } from "react";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

import speechBubbleImage from "../../assets/images/speech-bubble.png";
import { userProfile } from "../../types/userProfile";

type Props = {
  users: userProfile[];
};

export const UserWindow: FC<Props> = memo((props) => {
  const { users } = props;

  return (
    <>
      {users.map((user) => (
        <Box
          key={user.name}
          as={Flex}
          direction="column"
          border="1px black solid"
          mr={6}
          h={250}
          position="relative"
          justify="space-between"
          py={4}
          boxSizing='border-box'
        >
          <Image src={speechBubbleImage}
            alt=""
            boxSize="200px"
            mx="auto"
          />
          <Text
            align="center"
            position="absolute"
            top="30%"
            left="30%"
          >
            {user.text}
          </Text>
          <Flex align="center" ml={4}>
            <Avatar name={user.name} />
            <Text ml={2}>
              {user.name}
            </Text>
          </Flex>
        </Box>
      ))}
    </>
  );
});
