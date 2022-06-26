import {
  Button,
  ChakraProps,
  IconButton,
  IconButtonProps,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorMode(props: IconButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blue.700", "whiteAlpha.200")
  return (
    <IconButton
      onClick={toggleColorMode}
      variant={"solid"}
      // colorScheme={"whiteAlpha"}
      backgroundColor={bg}
      size={"xs"}
      icon={
        colorMode === "light" ? (
          <MoonIcon color={"yellow.200"} />
        ) : (
          <SunIcon color={"orange.200"} />
        )
      }
      
      {...props}
    />
  );
}
