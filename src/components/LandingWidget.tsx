import { Box, Flex, Text } from '@chakra-ui/react';

export const LandingWidget = () => {
  return (
    <Flex
      borderBottom={'1px solid bg.gradient'}
      justifyContent={'center'}
      gap={32}
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={'2xl'}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          21.34M
        </Text>
        <Text>Stacked</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text
          fontSize={'2xl'}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          5+
        </Text>
        <Text>Derivative Platforms</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text
          fontSize={'2xl'}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          21%
        </Text>
        <Text>Average APY</Text>
      </Box>
    </Flex>
  );
};
