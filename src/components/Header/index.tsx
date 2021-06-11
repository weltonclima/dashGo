import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SerachBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWidVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWidVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWidVersion && <SerachBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWidVersion} />
      </Flex>
    </Flex>
  )
}