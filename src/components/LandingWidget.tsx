import { Box, Flex, Text } from '@chakra-ui/react';

export const LandingWidget = () => {
  return (
    <Flex
      borderBottom={'1px solid bg.gradient'}
      justifyContent={'center'}
      gap={{ base: 8, md: 32 }}
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          21.34M
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Stacked</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          5+
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Derivative Platforms</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          21%
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Average APY</Text>
      </Box>
    </Flex>
  );
};
