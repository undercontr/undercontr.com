import { Box, Container } from "@chakra-ui/react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header(props: any) {
    return (
        <Box bgColor={"yellow.400"}>
            <TopBar />
            <Navbar />
        </Box>
    )
}