import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Jossany Moura</Text>
        <Text color="gray.300" fontSize="small">
          mjossany@gmail.com
        </Text>
      </Box>
      )}
      <Avatar size="md" name="Jossany Moura" src="https://github.com/mjossany.png"/>
    </Flex>
  );
}