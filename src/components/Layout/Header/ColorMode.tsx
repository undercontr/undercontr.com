import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button  variant={"ghost"} _hover={{backgroundColor: "black", color: "white"}} size="sm" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </header>
    )
  }