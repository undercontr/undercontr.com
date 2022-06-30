import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  CardBodyProps,
  CardFooterProps,
  CardProps,
  CardTitleProps,
} from "../lib/types/chakra-props";

export default function Card({children, ...props}: CardProps) {
  return (
    <Box overflow={"hidden"} border={"2px"} rounded={"2xl"} {...props}>
       {children}
    </Box>
  );
}

Card.Title = function Title(props: CardTitleProps) {
  return (
    <Box padding={[3,5]} width={"full"} {...props.container}>
      <Heading size={"lg"} {...props.h}>
        {props.children}
      </Heading>
    </Box>
  );
};

Card.Body = function Body({ limitTo, children, ...props }: CardBodyProps) {
  return (
    <Box padding={[3,5]} {...props}>
      {limitTo && typeof children == "string"
        ? children.substring(0, limitTo) + "..."
        : children}
    </Box>
  );
};

Card.Footer = function Footer({children, ...props}: CardFooterProps) {
    return (
        <Box padding={[3,5]} {...props}>
            {children}
        </Box>
    )
}