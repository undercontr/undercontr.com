import { Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaLinkProps } from "../../../lib/types/chakra-props";
import NextLink from "../../Utils/NextLink";

export default function SocialMediaLink({iconProps, linkProps}: SocialMediaLinkProps) {
  return (
      <NextLink {...linkProps}>
        <FontAwesomeIcon {...iconProps} />
      </NextLink>
  );
}
