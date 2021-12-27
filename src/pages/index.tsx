import { Flex, SimpleGrid } from '@chakra-ui/react';

import Category from '../components/Category';
import PrimaryBanner from '../components/PrimaryBanner';

export default function Home() {
  return (
    <>
      <PrimaryBanner />
      <Flex w="100%" maxW={1120} my="12" mx="auto">
        <SimpleGrid
          gap="18"
          align="flex-start"
          columns={5}
          px="6"
          w="100%"
          minChildWidth={160}
        >
          <Category
            src="/images/cocktail.svg"
            alt="Cocktail"
            width={85}
            height={85}
            categoryTitle="Vida noturna"
          />
          <Category
            src="/images/surf.svg"
            alt="Cocktail"
            width={85}
            height={85}
            categoryTitle="praia"
          />
          <Category
            src="/images/building.svg"
            alt="Cocktail"
            width={85}
            height={85}
            categoryTitle="moderno"
          />
          <Category
            src="/images/museum.svg"
            alt="Cocktail"
            width={85}
            height={85}
            categoryTitle="Clássico"
          />
          <Category
            src="/images/earth.svg"
            alt="Cocktail"
            width={85}
            height={85}
            categoryTitle="e mais..."
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}
