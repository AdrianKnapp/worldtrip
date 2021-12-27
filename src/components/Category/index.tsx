import { Box, Flex } from '@chakra-ui/react';

import CategoryImage from './CategoryImage';

type CategoryProps = {
  categoryTitle: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Category({
  categoryTitle,
  src,
  alt,
  width,
  height,
}: CategoryProps) {
  return (
    <Flex flexDirection="column" justify="center" textAlign="center">
      <CategoryImage src={src} alt={alt} width={width} height={height} />
      <Box as="h3" mt="3" fontSize={24} fontWeight="semibold" color="gray.900">
        {categoryTitle}
      </Box>
    </Flex>
  );
}
