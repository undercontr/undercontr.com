import { BoxProps, LinkProps, StackDirection, StackProps, TextProps, Theme } from "@chakra-ui/react"
import React, { ReactElement } from "react";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ChakraTheme = RecursivePartial<Theme>

export type LogoType = {
    parent?: BoxProps,
    logoText?: TextProps
}

export type HamburgerMenuType = {
    handleShow: {
        isOpen: boolean,
        onClose: VoidFunction,
        onOpen: VoidFunction
    }
}

export type NavigationMenuType = {
    stackProps?: StackProps,
    menuItemProps?: TextProps
}

export type MenuItemType = LinkProps & {
    children: ReactElement | string,
    isLast: boolean,
    to: string,
}
