import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { LogoProps } from "../../../lib/types/chakra-props";

export default function Logo({parent, logoText}: LogoProps) {

  const logoColor = useColorModeValue("blue.900", "white")
  return (
    <Box {...parent}>
      <Text
        letterSpacing={-2.5}
        fontSize={"5xl"}
        color={logoColor}
        fontWeight="bold"
        fontFamily={`Titillium Web, sans-serif`}
        transition={"color 0.2s"}
        {...logoText}
      >
        undercontr
      </Text>
    </Box>
  );
}
