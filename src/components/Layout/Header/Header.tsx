import { Box, Container } from "@chakra-ui/react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header(props: any) {
    return (
        <Box bgGradient="linear(to-r,pink.600,blue.600)">
            <TopBar />
            <Navbar />
        </Box>
    )
}