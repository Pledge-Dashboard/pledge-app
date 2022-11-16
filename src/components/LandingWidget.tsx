import { Box, Flex, Text } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import DataStoreContext from '../context/DataStore';

export const LandingWidget = () => {
  const { totalStaked, averageAPY } = useContext(DataStoreContext);

  return (
    <Flex
      borderBottom={'1px solid bg.gradient'}
      width={'full'}
      justifyContent={'space-between'}
      maxWidth={'600px'}
      px={4}
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          {totalStaked}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Staked</Text>
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
          {averageAPY}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Average APY</Text>
      </Box>
    </Flex>
  );
};
