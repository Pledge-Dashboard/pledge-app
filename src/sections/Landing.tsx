import { Flex, Text } from '@chakra-ui/react';

export const Landing = () => {
  return (
    <Flex
      h="100vh"
      id="Landing"
      as="section"
      w="full"
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
    >
      <Text
        fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
        fontWeight={500}
        bg="bg.gradient"
        backgroundClip="text"
        mb={8}
      >
        pledge
      </Text>
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        mb={4}
      >
        Liquid Staking Derivates on Polygon PoS
      </Text>
      <Text fontSize={{ md: 'lg' }}>Adding Security & Flexibility</Text>
    </Flex>
  );
};
