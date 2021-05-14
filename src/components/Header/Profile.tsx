import { Avatar, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <>
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>
          Welton Lima
          </Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          welton.c.lima@gmail.com
          </Text>
      </Box>
      <Avatar
        size="md"
        name="Welton Lima"
        src="https://avatars.githubusercontent.com/u/69590175?v=4"
      />
    </>
  );
}