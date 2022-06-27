import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { LogoType } from "../../../lib/types/chakra-prop";

export default function Logo({parent, logoText}: LogoType) {

  const logoColor = useColorModeValue("blue.900", "white")

  return (
    <Box {...parent}>
      <Text
        letterSpacing={-2.5}
        fontSize={"5xl"}
        color={logoColor}
        fontWeight="bold"
        fontFamily={`Titillium Web, sans-serif`}

        {...logoText}
      >
        undercontr
      </Text>
    </Box>
  );
}
