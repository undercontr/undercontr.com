import { extendTheme, Theme } from "@chakra-ui/react"

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

const theme: RecursivePartial<Theme> = {
    components: {
        Container: {
            baseStyle: {
                maxW: 1100
            }
        }
    },
    fonts: {
        body: "Inter",
        heading: "Inter",
    }    
}

export default extendTheme(theme);