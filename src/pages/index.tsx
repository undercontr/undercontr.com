import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../components/Card";
import ArticleCard from "../components/Cards/ArticleCard";

const Home: NextPage = () => {
  return (
    <Container>
      <ArticleCard limitTo={150} title="Difference between GraphQL and gRPC" content="GraphQL and gRPC have quite differences such as caching and load
          balancing. gRPC is the only communication system that allows load balancing among REST, GraphQL and gRPC" />
    </Container>
  );
};

export default Home;
