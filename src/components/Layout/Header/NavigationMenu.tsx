import { Button, HStack, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function NavigationMenu(props: any) {
    return (
        <Stack lineHeight={1} direction={"row"}>
            <MenuItem>Javascript</MenuItem>
            <MenuItem>C#</MenuItem>
            <MenuItem>Web</MenuItem>
            <MenuItem>About</MenuItem>
        </Stack>
    )
}