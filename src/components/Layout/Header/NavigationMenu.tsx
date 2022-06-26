import { Button, HStack, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function NavigationMenu(props: any) {
    return (
        <Stack lineHeight={1} direction={props.direction || "row"}>
            <MenuItem onClick={props.onItemClick} {...props}>Javascript</MenuItem>
            <MenuItem onClick={props.onItemClick} {...props}>C#</MenuItem>
            <MenuItem onClick={props.onItemClick} {...props}>Web</MenuItem>
            <MenuItem onClick={props.onItemClick} {...props}>About</MenuItem>
        </Stack>
    )
}