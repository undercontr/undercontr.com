import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton } from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavigationMenu from "./NavigationMenu";

export default function Navbar(props: any) {
  return (
    <Box {...props}>
      <Container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo parent={{textAlign: ["left", "unset"]}} logoText={{fontSize: ["4xl", "5xl"]}} />
        {/** responsibve */}
        <HStack display={["flex", "none"]} marginY={30} justifyContent={["center", "unset"]} alignItems={"baseline"} gap={0.5}>
          <ColorMode size="sm" aria-label="color mode button on mobile" />
          <MobileMenu />
        </HStack>

        <HStack display={["none", "flex"]} justifyContent={["center", "unset"]} alignItems={"baseline"} gap={3}>
          <NavigationMenu />
          <ColorMode aria-label="color mode button on xl to the sm" />
        </HStack>
      </Container>
    </Box>
  );
}
