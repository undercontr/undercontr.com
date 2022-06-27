import { Fade, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { MenuItemType } from "../../../lib/types/chakra-prop";

export default function MenuItem({
  children,
  isLast,
  to = "/",
  ...rest
}: MenuItemType) {
  return (
    <NextLink href={to} passHref={true}>
      <Link fontWeight={700} {...rest} transition={"all 0.5s ease"}>
        
        {children}
      </Link>
    </NextLink>
  );
}
