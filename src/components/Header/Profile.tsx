import { Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Welton Lima
        </Text>
          <Text color="gray.300" fontSize="small">
            welton.c.lima@gmail.com
        </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Welton Lima"
        src="https://avatars.githubusercontent.com/u/69590175?v=4"
      />
    </>
  );
}