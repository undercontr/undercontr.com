import { extendTheme, Theme } from "@chakra-ui/react"
import { ChakraTheme } from "./types/chakra-prop";

const theme: ChakraTheme = {
    components: {
        Container: {
            baseStyle: {
                maxW: 1100
            }
        }
    },
    fonts: {
        body: `'Inter', sans-serif`,
        heading: `'Inter', sans-serif`,
    },
    config: {
        disableTransitionOnChange: false,
        initialColorMode: "system"
    }
}

export default extendTheme(theme);