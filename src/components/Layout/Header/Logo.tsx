import { Box, Text } from "@chakra-ui/react";

export default function Logo(props: any) {
    return (
        <Box {...props}>
            <Text letterSpacing={-2.5} fontSize={"5xl"} color={"white"} fontWeight="bold" fontFamily={"Titillium Web"}>
                undercontr
            </Text>
        </Box>
    )
}