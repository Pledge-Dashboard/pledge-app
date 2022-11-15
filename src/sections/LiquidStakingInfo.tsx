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
        <Box
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          mb={8}
          pb={{ base: 6 }}
          pt={{ base: 6 }}
          pl={{ base: 6 }}
          pr={{ base: 6 }}
        >
          <Text
            fontWeight={'bold'}
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          >
            Staking?
          </Text>
          <Text w={{ base: 'full', md: '80%', lg: '50%' }}>
            Stake MATIC with validators and participate in growth of the network!
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-end' }}>
        <Box
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          mb={8}
          pb={{ base: 6 }}
          pt={{ base: 6 }}
          pl={{ base: 6 }}
          pr={{ base: 6 }}
        >
          <Text
            fontWeight={'bold'}
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          >
            Returns!
          </Text>
          <Text w={{ base: 'full', md: '80%', lg: '50%' }}>Get returns for staked MATIC!! Current Avg. APY: __%</Text>
        </Box>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
        <Box
          bgColor={'bg.translucent'}
          textAlign={{ base: 'center', md: 'left' }}
          mb={8}
          pb={{ base: 6 }}
          pt={{ base: 6 }}
          pl={{ base: 6 }}
          pr={{ base: 6 }}
        >
          <Text
            fontWeight={'bold'}
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          >
            Liquid?!
          </Text>
          <Text w={{ base: 'full', md: '80%', lg: '50%' }}>
            Trade, invest and use receipt tokens (stMATIC, tMATIC, aMATICb, etc.)!!!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LiquidStakingInfo;
