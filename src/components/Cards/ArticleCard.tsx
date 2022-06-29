import { Box, Button, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticleCardProps } from "../../lib/types/chakra-props";
import Card from "../Card";

export default function ArticleCard({
  limitTo,
  title,
  content,

}: ArticleCardProps) {
  const borderColor = useColorModeValue(
    "linear(to-b, blackAlpha.100, transparent)",
    "linear(to-b, whiteAlpha.200, transparent)"
  );
  return (
    <Card>
      <Card.Title
        h={{ fontWeight: "700", fontFamily: "'Montserrat', sans-serif" }}
        container={{
          bgGradient: borderColor,
        }}
      >
        {title}
      </Card.Title>
      <Card.Body limitTo={limitTo}>{content}</Card.Body>
      <Card.Footer display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
        <HStack><Text fontSize={"xs"}>author: </Text><Text colorScheme={"purple"} fontSize={"xs"} fontWeight={"bold"}>undercontr</Text></HStack>
        <Box>
          <Button
            variant={"ghost"}
            colorScheme={"blue"}
            size="sm"
            rounded={"lg"}
          >
            Read...
          </Button>
          <Button variant={"ghost"}
            colorScheme={"blue"}
            size="sm"
            rounded={"lg"}>
            Read it on <Text marginLeft={5}><FontAwesomeIcon icon={faMedium} /></Text>
          </Button>
        </Box>
      </Card.Footer>
    </Card>
  );
}
