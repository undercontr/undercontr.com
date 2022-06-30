import {
  Box,
  chakra,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import penv from "../../../lib/helper/penv";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string | undefined;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack>
          <Text fontWeight={"bold"}>undercontr.com</Text><Text> © 2022</Text>
        </HStack>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Medium"} href={penv.MEDIUM_LINK}>
            <FontAwesomeIcon icon={faMedium} />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={penv.LINKEDIN_LINK}>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialButton>
          <SocialButton label={"Github"} href={penv.GITHUB_LINK}>
            <FontAwesomeIcon icon={faGithub} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
