import { Box, Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  CardBodyProps,
  CardFooterProps,
  CardProps,
  CardTitleProps,
} from "../lib/types/chakra-props";

export default function Card(props: CardProps) {
  return (
    <Grid>
       
    </Grid>
  );
}

Card.Title = function Title(props: CardTitleProps) {
  return (
    <Box padding={5} width={"full"} {...props.container}>
      <Heading size={"lg"} {...props.h}>
        {props.children}
      </Heading>
    </Box>
  );
};

Card.Body = function Body({ limitTo, children }: CardBodyProps) {
  return (
    <Box padding={5}>
      {limitTo && typeof children == "string"
        ? children.substring(0, limitTo) + "..."
        : children}
    </Box>
  );
};

Card.Footer = function Footer(props: CardFooterProps) {
    return (
        <Box padding={5}>
            {props.children}
        </Box>
    )
}