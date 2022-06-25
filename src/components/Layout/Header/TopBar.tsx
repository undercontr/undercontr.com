import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons"

export default function TopBar(props: any) {
  return (
    <Box {...props}>
      <Container>
        <Flex justify={["space-between"]} align={"center"}>
          <Text color={"white"} fontSize={13} fontWeight={700}>email me</Text>
          <HStack gap={1}>
            <FontAwesomeIcon color="white" size="1x" icon={faMedium} />
            <FontAwesomeIcon color="white" icon={faLinkedin} />
            <FontAwesomeIcon color="white" icon={faGithub} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
