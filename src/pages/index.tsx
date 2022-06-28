import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <Container>
      <Card>
        <Card.Title
          h={{ fontWeight: "" }}
          container={{
            bg: "",
            bgGradient: "linear(to-b, whiteAlpha.200, transparent)",
          }}
        >
          Difference between GraphQL and gRPC
        </Card.Title>
        <Card.Body limitTo={150}>
          GraphQL and gRPC have quite differences such as caching and load
          balancing. gRPC is the only communication system that allows load balancing among REST, GraphQL and gRPC
        </Card.Body>
        <Card.Footer>
          asda
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Home;
