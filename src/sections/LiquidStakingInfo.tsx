import { Box, Flex, Text } from '@chakra-ui/react';

export const LiquidStakingInfo = () => {
  return (
    <Box
      width={'full'}
      textAlign="center"
      minHeight={'95vh'}
      id="LiquidStakingInfo"
      as="section"
      padding={{ base: 8, md: 0 }}
    >
      <Text
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight={500}
        bg="bg.gradient"
        backgroundClip="text"
        margin={'auto'}
      >
        what?
      </Text>
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        mb={8}
      >
        Understand Liquid Staking
      </Text>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
        <Flex
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          flexDirection={'column'}
          alignItems={'flex-end'}
          w={{ base: 'full', md: '75%', lg: '60%' }}
          minH={'8rem'}
          mb={{ base: 8, md: 12, lg: 4 }}
        >
          <Box
            width={{ base: 'full', md: '75%', lg: '40%' }}
            pb={{ base: 6 }}
            pt={{ base: 6, md: 12 }}
            pl={{ base: 6, lg: 16 }}
            pr={{ base: 6, lg: 10 }}
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              mb={4}
            >
              Staking?
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Stake MATIC with validators and participate in growth of the network!
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-end' }}>
        <Flex
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          flexDirection={'column'}
          alignItems={'flex-start'}
          w={{ base: 'full', md: '50%', lg: '42.5%' }}
          minH={'8rem'}
          mb={{ base: 8, md: 12, lg: 4 }}
        >
          <Box
            width={{ base: 'full', md: '75%', lg: '50%' }}
            pb={{ base: 6 }}
            pt={{ base: 6, md: 12 }}
            pl={{ base: 6, lg: 16 }}
            pr={{ base: 6, lg: 10 }}
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              mb={4}
            >
              Returns!
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Get returns for staked MATIC!!</Text>{' '}
            <Text fontSize={{ base: 'sm', md: 'md' }}>Current Avg. APY: __%</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
        <Flex
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          flexDirection={'column'}
          alignItems={'flex-end'}
          w={{ base: 'full', md: '60%', lg: '50%' }}
          minH={'8rem'}
          mb={{ base: 8, md: 12, lg: 4 }}
        >
          <Box
            width={{ base: 'full', md: '75%', lg: '50%' }}
            pb={{ base: 6 }}
            pt={{ base: 6, md: 12 }}
            pl={{ base: 6, lg: 16 }}
            pr={{ base: 6, lg: 10 }}
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              mb={4}
            >
              Liquid?!
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Trade, invest and use receipt tokens (stMATIC, tMATIC, aMATICb, etc.)!!!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LiquidStakingInfo;
