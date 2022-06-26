import { Box, ChakraProps, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo({parent, logoText}: {parent: ChakraProps, logoText: ChakraProps}) {

  const logoColor = useColorModeValue("blue.900", "white")

  return (
    <Box {...parent}>
      <Text
        letterSpacing={-2.5}
        fontSize={"5xl"}
        color={logoColor}
        fontWeight="bold"
        fontFamily={"Titillium Web"}

        {...logoText}
      >
        undercontr
      </Text>
    </Box>
  );
}
