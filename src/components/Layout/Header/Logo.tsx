import { Box, ChakraProps, Text } from "@chakra-ui/react";

export default function Logo({parent, logoText}: {parent: ChakraProps, logoText: ChakraProps}) {
  return (
    <Box {...parent}>
      <Text
        letterSpacing={-2.5}
        fontSize={"5xl"}
        color={"white"}
        fontWeight="bold"
        fontFamily={"Titillium Web"}

        {...logoText}
      >
        undercontr
      </Text>
    </Box>
  );
}
