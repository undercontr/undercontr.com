import { Box } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Box marginY={5}>
      {children}
      </Box>
      <Footer />
    </>
  );
}
