import { Button, HStack, Stack, StackDirection } from "@chakra-ui/react";
import { NavigationMenuType } from "../../../lib/types/chakra-prop";
import MenuItem from "./MenuItem";

export default function NavigationMenu({menuItemProps, stackProps}: NavigationMenuType) {
    return (
        <Stack lineHeight={1} direction={stackProps?.direction || "row"} {...stackProps}>
            <MenuItem {...menuItemProps}>Javascript</MenuItem>
            <MenuItem {...menuItemProps}>C#</MenuItem>
            <MenuItem {...menuItemProps}>Web</MenuItem>
            <MenuItem {...menuItemProps}>About</MenuItem>
        </Stack>
    )
}