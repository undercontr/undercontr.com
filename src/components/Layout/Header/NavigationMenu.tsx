import { Button, HStack, Stack, StackDirection } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

type NavigationMenuType = {
    onItemClick: VoidFunction | undefined,
    direction: StackDirection | undefined,
    [x: string]: any    
}

export default function NavigationMenu({onItemClick, ...props}: Partial<NavigationMenuType>) {
    return (
        <Stack lineHeight={1} direction={props.direction || "row"}>
            <MenuItem onClick={onItemClick} {...props}>Javascript</MenuItem>
            <MenuItem onClick={onItemClick} {...props}>C#</MenuItem>
            <MenuItem onClick={onItemClick} {...props}>Web</MenuItem>
            <MenuItem onClick={onItemClick} {...props}>About</MenuItem>
        </Stack>
    )
}