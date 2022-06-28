import { BoxProps, LinkProps, StackProps, TextProps, Theme } from "@chakra-ui/react"
import { ReactElement } from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { NextLinkProps } from "./next-props";
import { RecursivePartial } from "./common-types";

export type ChakraTheme = RecursivePartial<Theme>

export type LogoProps = {
    parent?: BoxProps,
    logoText?: TextProps
}

export type HamburgerMenuProps = {
    handleShow: {
        isOpen: boolean,
        onClose: VoidFunction,
        onOpen: VoidFunction
    }
}

export type NavigationMenuProps = {
    stackProps?: StackProps,
    menuItemProps?: MenuItemProps
}

export type MenuItemProps = LinkProps & {
    children?: ReactElement | string,
    isLast?: boolean,
    to?: string,
}

export type SocialMediaLinkProps = {
    linkProps: NextLinkProps,
    iconProps: FontAwesomeIconProps
}