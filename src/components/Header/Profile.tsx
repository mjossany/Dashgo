import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Jossany Moura</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          mjossany@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Jossany Moura"
        src="https://github.com/mjossany.png"
      />
    </Flex>
  );
}