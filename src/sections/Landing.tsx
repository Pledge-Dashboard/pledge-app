import { Flex, Text } from '@chakra-ui/react';
import BlurCircle from '../components/BlurCircle';
import { LandingWidget } from '../components/LandingWidget';

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
        blur={100}
        w="75%"
        pt="75%"
        opacity={1}
        position="absolute"
        mixBlendMode={'color'}
        top="0"
        right="0"
        transform="translate(50%, -60%)"
        // display={{ base: 'none', lg: 'block' }}
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
        fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
        mb={4}
      >
        Liquid Staking Derivates on Polygon PoS
      </Text>
      <Text
        fontSize={{ md: 'lg', lg: 'xl' }}
        mb={32}
      >
        Adding Security & Flexibility
      </Text>
      <LandingWidget />
    </Flex>
  );
};
