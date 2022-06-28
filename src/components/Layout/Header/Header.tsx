import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header(props: any) {

    const pink = useColorModeValue("pink.300", "pink.500")
    const blue = useColorModeValue("blue.300", "blue.500")

    return (
        <Box bgGradient={`linear(to-r,${pink},${blue})`}>
            <TopBar />
            <Navbar />
        </Box>
    )
}