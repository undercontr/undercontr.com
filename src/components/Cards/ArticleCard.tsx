import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextImage from "next/image";
import { ArticleCardProps } from "../../lib/types/chakra-props";
import Card from "../Card";

import image from "../../../public/test.jpg";

export default function ArticleCard({
  limitTo,
  title,
  content,
}: ArticleCardProps) {
  const borderColor = useColorModeValue(
    "linear(to-b, blackAlpha.100, transparent)",
    "linear(to-b, whiteAlpha.100, transparent)"
  );
  return (
    <Card borderColor={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}  bgGradient={borderColor}>
      <Grid templateColumns={["", "repeat(4, 1fr)"]}>
        <GridItem colSpan={1} display={"flex"} justifyContent={"center"} alignContent={"center"} p={5}>
        <NextImage
              src={image}
              objectFit={"cover"}
              style={{borderRadius: "10px"}}
              alt="test"
            />
        </GridItem>
        <GridItem colSpan={[1,3]}>
          <Card.Title
            h={{
              textAlign: ["center", "left"],
              fontWeight: "700",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {title}
          </Card.Title>
          <Card.Body
            limitTo={limitTo}
            textAlign={["justify", "left"]}
            fontSize={["sm", "md"]}
          >
            {content}
          </Card.Body>
          <Card.Footer
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <HStack>
              <Text fontSize={"xs"}>author: </Text>
              <Text colorScheme={"purple"} fontSize={"xs"} fontWeight={"bold"}>
                undercontr
              </Text>
            </HStack>
            <HStack>
              <Button
                variant={"ghost"}
                colorScheme={"blue"}
                size={["xs", "sm"]}
                rounded={"lg"}
              >
                Read it on{" "}
                <Text marginLeft={5}>
                  <FontAwesomeIcon icon={faMedium} />
                </Text>
              </Button>
              <Button
                variant={"ghost"}
                colorScheme={"blue"}
                size={["xs", "sm"]}
                rounded={"lg"}
              >
                Read...
              </Button>
            </HStack>
          </Card.Footer>
        </GridItem>
      </Grid>
    </Card>
  );
}
