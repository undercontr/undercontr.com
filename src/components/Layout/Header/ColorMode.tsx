import {
  Button,
  ChakraProps,
  IconButton,
  IconButtonProps,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorMode(props: IconButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      size={"xs"}
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
