import { Stack } from "@chakra-ui/react";
import { NavigationMenuProps } from "../../../lib/types/chakra-props";
import MenuItem from "./MenuItem";

export default function NavigationMenu({menuItemProps, stackProps}: NavigationMenuProps) {
    return (
        <Stack lineHeight={1} direction={stackProps?.direction || "row"} {...stackProps}>
            <MenuItem {...menuItemProps}>Javascript</MenuItem>
            <MenuItem {...menuItemProps}>C#</MenuItem>
            <MenuItem {...menuItemProps}>Web</MenuItem>
            <MenuItem {...menuItemProps}>About</MenuItem>
        </Stack>
    )
}