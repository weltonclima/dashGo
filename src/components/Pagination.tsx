import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";

export function Pagination() {
  return (
    <HStack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2" >
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
      </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          disabled
          _disabled={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          2
      </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          disabled
          _disabled={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          3
      </Button>
      </HStack>
    </HStack>
  );
}