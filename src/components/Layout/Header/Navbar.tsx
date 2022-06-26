import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton } from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import Logo from "./Logo";
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
          <ColorMode size={"sm"} />
          <IconButton aria-label="mobilemenu" size={"sm"} icon={<HamburgerIcon />} />
        </HStack>

        <HStack display={["none", "flex"]} justifyContent={["center", "unset"]} alignItems={"baseline"} gap={3}>
          <NavigationMenu />
          <ColorMode />
        </HStack>
      </Container>
    </Box>
  );
}
