import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters, registersPerPage = 10, currentPage = 1, onPageChange
}: PaginationProps) {
  const lastPage = Math.round(totalCountOfRegisters / registersPerPage);

  let previousTo = currentPage - 1 - siblingsCount
  let previousFrom = currentPage - 1
  const previousPages = currentPage > 1
    ? generatePagesArray(previousTo, previousFrom)
    : [];

  let nextFrom = Math.min(currentPage + siblingsCount, lastPage)
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, nextFrom)
    : [];

  const thenPage = currentPage * registersPerPage;
  const fromPage = thenPage - (registersPerPage - 1);

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>{fromPage}</strong> - <strong>{thenPage}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack spacing="2" >

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) &&
              <Text color="gray.300" w="8" textAlign="center" >...</Text>
            }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage &&
              <Text color="gray.300" w="8" textAlign="center" >...</Text>
            }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </HStack>
    </Stack>
  );
}