import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerMenuProps } from "../../../lib/types/chakra-props";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

export default function HamburgerMenu({
  handleShow: { isOpen, onClose, onOpen },
}: HamburgerMenuProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader textAlign={"center"}>
          <Heading
            size={"4xl"}
            bgGradient="linear(to-r, pink.500,blue.600)"
            bgClip={"text"}
          >
            Menu
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <NavigationMenu
            stackProps={{ direction: "column" }}
            menuItemProps={{
              fontSize: 20,
              textAlign: "center",
              onClick: onClose,
            }}
          />
        </DrawerBody>

        <DrawerFooter
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline "}
        >
          <Logo logoText={{ fontSize: "2xl", letterSpacing: -1.7 , bgGradient: "linear(to-r, pink.500,blue.600)", bgClip: "text"}} />
          <Text fontWeight={700}>{new Date().getFullYear()}</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
