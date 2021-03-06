import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Container, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavigationMenu from "./NavigationMenu";

import NextLink from "../../Utils/NextLink"

export default function Navbar(props: BoxProps) {

  const textColor = useColorModeValue("blue.900", "white")
  
  return (
    <Box {...props}>
      <Container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <NextLink href={"/"} _hover={{textDecoration: "none"}}><Logo logoText={{fontSize: ["4xl", "6xl"], cursor: "pointer"}} /></NextLink>
        {/** responsibve */}
        <HStack display={["flex", "none"]} marginY={30} justifyContent={["center", "unset"]} alignItems={"baseline"} gap={0.5}>
          <ColorMode size="sm" aria-label="color mode button on mobile" />
          <MobileMenu />
        </HStack>

        <HStack display={["none", "flex"]} justifyContent={["center", "unset"]} alignItems={"baseline"} gap={3}>
          <NavigationMenu menuItemProps={{color: textColor}} />
          <ColorMode aria-label="color mode button on xl to the sm" />
        </HStack>
      </Container>
    </Box>
  );
}
