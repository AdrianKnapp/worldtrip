import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Logo() {
  return (
    <Flex
      w="100%"
      maxW="200px"
      h="100%"
      justify="center"
      align="center"
      position="relative"
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={185}
        height={46}
        layout="fill"
      />
    </Flex>

  )
}
