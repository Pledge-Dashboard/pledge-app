import { Flex, Text } from '@chakra-ui/react';
import BlurCircle from '../components/BlurCircle';

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
      <BlurCircle
        blur={80}
        width="35rem"
        opacity="0.2"
        position="absolute"
        top="0"
        right="0"
        transform="translate(25%, -50%)"
      />
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
