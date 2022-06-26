import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function MenuItem({ children, isLast, to = "/", ...rest }: any) {
  return (
    <NextLink href={to} passHref={true}>
      <Link fontWeight={"bold"}>
        <Text {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  );
}
