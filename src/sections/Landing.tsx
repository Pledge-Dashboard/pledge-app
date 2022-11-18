import { Button, Flex, Text } from '@chakra-ui/react';
import BlurCircle from '../components/BlurCircle';
// import { LandingWidget } from '../components/LandingWidget';
import dynamic from 'next/dynamic';

const LandingWidget = dynamic(() => import('../components/LandingWidget'), {
  ssr: false,
});

export const Landing = () => {
  return (
    <Flex
      h="calc(100vh - 18rem)"
      id="Landing"
      as="section"
      w="full"
      alignItems={'center'}
      justifyContent={'center'}
      mt="28"
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

      <Button
        as={'a'}
        variant="outline"
        borderRadius={0}
        borderColor="#FF7878"
        bgColor={'#FF787823'}
        _hover={{ backgroundColor: '#FF787833' }}
        mt="12"
        mb="20"
        href={'#Statistics'}
      >
        Explore Now!!
      </Button>

      <LandingWidget />
    </Flex>
  );
};
