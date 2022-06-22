import { Button, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function NavigationMenu(props) {
    return (
        <Stack direction={"row"}>
            <MenuItem>Javascript</MenuItem>
            <MenuItem>C#</MenuItem>
            <MenuItem>Web</MenuItem>
            <MenuItem>About</MenuItem>
        </Stack>
    )
}