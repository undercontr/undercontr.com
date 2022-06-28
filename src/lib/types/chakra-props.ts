import { BoxProps, HeadingProps, LinkProps, StackProps, TextProps, Theme, UseDisclosureProps, UseDisclosureReturn } from "@chakra-ui/react"
import { ReactElement } from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { NextLinkProps } from "./next-props";
import { ReactChildren, RecursivePartial } from "./common-types";

export type ChakraTheme = RecursivePartial<Theme>

export type LogoProps = {
    parent?: BoxProps,
    logoText?: TextProps
}

export type HamburgerMenuProps = {
    handleShow: UseDisclosureReturn
}



export type NavigationMenuProps = {
    stackProps?: StackProps,
    menuItemProps?: MenuItemProps
}

export type MenuItemProps = LinkProps & {
    children?: ReactChildren<string>,
    isLast?: boolean,
    to?: string,
}

export type SocialMediaLinkProps = {
    linkProps: NextLinkProps,
    iconProps: FontAwesomeIconProps
}

export type CardProps = BoxProps & {
    children: ReactChildren<string>
}

export type CardTitleProps = {
    container?: BoxProps,
    h?: HeadingProps,
    children: ReactChildren<string>
}

export type CardBodyProps = {
    limitTo?: number
    children: ReactChildren<string>
} 

export type CardFooterProps = {
    children: ReactChildren<string>
}