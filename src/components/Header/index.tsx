import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      justify="center"
      position="relative"
    >
      <Flex
        w="100%"
        maxW="200px"
        h="100%"
        justify="center"
        align="center"
        position="relative"
      >
        <Logo />
      </Flex>
    </Flex>
  )
}
