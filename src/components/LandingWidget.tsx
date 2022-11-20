import DataStoreContext from '../context/DataStore';
import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { formattedNum } from '../utils/numberFormatter';

const LandingWidget: FC = () => {
  const { totalStaked, averageAPY, isCurrentDataLoading } = useContext(DataStoreContext);

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
          {isCurrentDataLoading ? (
            <Skeleton
              mb="4"
              mt="2"
              height="30px"
            />
          ) : (
            formattedNum(totalStaked)
          )}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Staked MATIC</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight={500}
          bg="bg.gradient"
          backgroundClip="text"
        >
          {isCurrentDataLoading ? (
            <Skeleton
              mb="4"
              mt="2"
              height="30px"
            />
          ) : (
            '5+'
          )}
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
          {isCurrentDataLoading ? (
            <Skeleton
              mb="4"
              mt="2"
              height="30px"
            />
          ) : (
            `${formattedNum(averageAPY)}%`
          )}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}>Average APY</Text>
      </Box>
    </Flex>
  );
};

export default LandingWidget;
