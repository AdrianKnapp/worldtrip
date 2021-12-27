import { Box, Flex } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

interface CategoryImageProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function CategoryImage({
  src,
  alt,
  width,
  height,
  ...rest
}: CategoryImageProps) {
  return (
    <Flex display="flex" justify="center" align="center">
      <Box w="85px" position="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          {...rest}
        />
      </Box>
    </Flex>
  );
}
