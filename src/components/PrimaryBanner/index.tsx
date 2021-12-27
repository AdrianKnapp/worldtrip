import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function PrimaryBanner() {
  return (
    <Flex position="relative" justify="center" align="center">
      <Box w="100vw" h="auto">
        <Image
          src="/images/initial-banner.svg"
          alt="Banner"
          width={750}
          height={192}
          quality={65}
          layout="responsive"
          unoptimized
          priority
        />
      </Box>
    </Flex>
  );
}
