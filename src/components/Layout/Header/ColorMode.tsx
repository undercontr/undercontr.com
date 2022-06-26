import {
  Button,
  ChakraProps,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorMode(props: ChakraProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      size={"xs"}
      aria-label="icon"
      icon={
        colorMode === "light" ? (
          <MoonIcon color={"blue.600"} />
        ) : (
          <SunIcon color={"orange.200"} />
        )
      }
      {...props}
    />
  );
}
