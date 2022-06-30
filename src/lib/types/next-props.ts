import { LinkProps } from "next/link";
import { ReactElement } from "react";
import { Url } from "url";
import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

export type NextLinkProps = ChakraLinkProps & {
    href: Url | string,
    nextProps?: LinkProps
    children?: ReactElement | string
}

interface StaticRequire {
    default: StaticImageData;
}

export type StaticImport = StaticRequire | StaticImageData;