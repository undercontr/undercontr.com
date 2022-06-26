import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";

export default function MobileMenu() {
  const disclosure = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="mobilemenu"
        size={"sm"}
        icon={<HamburgerIcon />}
        onClick={disclosure.onOpen}
      />
      <HamburgerMenu handleShow={disclosure} />
    </>
  );
}
