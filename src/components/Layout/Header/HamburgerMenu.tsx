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
import NavigationMenu from "./NavigationMenu";

type HamburgerMenuType = {
    handleShow: {
        isOpen: boolean,
        onClose: VoidFunction,
        onOpen: VoidFunction
    }
}

export default function HamburgerMenu({
  handleShow: { isOpen, onClose, onOpen },
}: HamburgerMenuType) {
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
            color
          />
        </DrawerBody>

        <DrawerFooter>
            undercontr.com | {new Date().getFullYear()}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
