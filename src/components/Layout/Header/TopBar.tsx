import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaLink from "./SocialMediaLink";
import NextLink from "../../Utils/NextLink";

export default function TopBar(props: any) {
  return (
    <Box bg={"black"} {...props}>
      <Container>
        <Flex justify={["space-between"]} align={"center"}>
          <NextLink
            color={"white"}
            fontWeight="bold"
            fontSize={"xs"}
            href={"mailto:onder.alkan15@gmail.com"}
          >
            email me
          </NextLink>
          <HStack gap={1}>
            <SocialMediaLink
              iconProps={{ color: "white", icon: faMedium }}
              linkProps={{ href: "https://undercontr.medium.com" }}
            />
            <SocialMediaLink
              iconProps={{ color: "white", icon: faLinkedin }}
              linkProps={{ href: "https://linkedin.com/in/onderalkan" }}
            />
            <SocialMediaLink
              iconProps={{ color: "white", icon: faGithub }}
              linkProps={{ href: "https://github.com/undercontr" }}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
