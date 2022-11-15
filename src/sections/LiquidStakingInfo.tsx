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
        <Box>
          <Text>Staking?</Text>
          <Text>Stake MATIC with validators and participate in growth of the network!</Text>
        </Box>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-end' }}>
        <Box>
          <Text>Returns!</Text>
          <Text>Get returns for staked MATIC!! Current Avg. APY: __%</Text>
        </Box>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
        <Box>
          <Text>Liquid?!</Text>
          <Text>Trade, invest and use receipt tokens (stMATIC, tMATIC, aMATICb, etc.)!!!</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LiquidStakingInfo;
