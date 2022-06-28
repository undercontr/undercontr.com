import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MenuItemProps } from "../../../lib/types/chakra-props";

export default function MenuItem({
  children,
  isLast,
  to = "/",
  ...rest
}: MenuItemProps) {
  return (
    <NextLink href={to} passHref={true}>
      <Link fontWeight={700} {...rest} transition={"color 0.2s"}>
        {children}
      </Link>
    </NextLink>
  );
}
