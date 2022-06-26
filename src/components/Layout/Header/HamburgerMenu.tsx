import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import NavigationMenu from "./NavigationMenu";

export default function HamburgerMenu({
  handleShow: { isOpen, onClose, onOpen },
}) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader textAlign={"center"}>
          <Heading size={"4xl"} bgGradient="linear(to-r, pink.500,blue.600)" bgClip={"text"}>Menu</Heading>
        </DrawerHeader>

        <DrawerBody>
          <NavigationMenu
            fontSize={20}
            textAlign={"center"}
            direction={"column"}
            onItemClick={onClose}
          />
        </DrawerBody>

        <DrawerFooter>
            undercontr.com | {new Date().getFullYear()}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
