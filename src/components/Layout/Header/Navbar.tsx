import { Box, Container, HStack } from "@chakra-ui/react";
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
        <Logo />
        <HStack gap={3}>
          <NavigationMenu />
          <ColorMode />
        </HStack>
      </Container>
    </Box>
  );
}
