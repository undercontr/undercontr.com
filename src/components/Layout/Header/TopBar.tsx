import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function TopBar(props: any) {
  return (
    <Box bg={"black"}>
      <Container>
        <Flex justify={["center", "space-between"]} align={"center"}>
          <Text color={"white"} fontSize={13} fontWeight={700}>email me</Text>
          <Box>
            
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
