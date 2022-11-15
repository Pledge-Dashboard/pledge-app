import { Box, Flex, Text } from '@chakra-ui/react';
import { StakeInfoCard } from '../components/StakeInfoCard';

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
        <StakeInfoCard
          title="Staking?"
          description="Stake MATIC with validators and participate in growth of the network!"
          cardWidth={{ base: 'full', md: '75%', lg: '60%' }}
          textWidth={{ base: 'full', md: '75%', lg: '40%' }}
          alignment="flex-end"
        />
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-end' }}>
        <StakeInfoCard
          title="Returns!"
          description="Get returns for staked MATIC!! Current Avg. APY: __%"
          cardWidth={{ base: 'full', md: '50%', lg: '42.5%' }}
          textWidth={{ base: 'full', md: '75%', lg: '50%' }}
          alignment="flex-start"
        />
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
        <StakeInfoCard
          title="Liquid?"
          description=" Trade, invest and use receipt tokens (stMATIC, tMATIC, aMATICb, etc.)!!!"
          cardWidth={{ base: 'full', md: '60%', lg: '50%' }}
          textWidth={{ base: 'full', md: '75%', lg: '50%' }}
          alignment="flex-end"
        />
      </Flex>
    </Box>
  );
};

export default LiquidStakingInfo;
