import { Box, Container, HStack } from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

export default function Navbar(props: any) {
  return (
    <Box {...props}>
      <Container
        display={["block", "flex"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo textAlign={["center", "unset"]} />
        <HStack justifyContent={["center", "unset"]} gap={3}>
          <NavigationMenu />
          <ColorMode />
        </HStack>
      </Container>
    </Box>
  );
}
