import NLink from "next/link"
import { Link } from "@chakra-ui/react"
import { NextLinkProps } from "../../lib/types/next-props"

export default function NextLink(props: NextLinkProps) {
    return (
        <NLink {...props.nextProps} href={props.href} passHref >
            <Link {...props}>
                {props.children}
            </Link>
        </NLink>
    )
}