import { Box, Flex, Text } from '@chakra-ui/react';
import { SectionContainer } from '../layouts/SectionContainer';

export const LiquidStakingInfo = () => {
  return (
    <SectionContainer
      id="LiquidStaking"
      title="what?"
    >
      <Flex
        grow={'1'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ base: '6', md: '8' }}
        flexDir={{ base: 'column', md: 'row' }}
        mt={{ base: '8', md: '0' }}
      >
        <Box
          bgColor={'bg.translucent'}
          py={8}
          px={4}
          borderRadius={'xl'}
          boxShadow={'xl'}
          width={'xs'}
        >
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="bold"
          >
            Deposit Your Tokens
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'md' }}> on any liquid stacking platform of your choice </Text>
        </Box>
        <Box
          bgColor={'bg.translucent'}
          py={8}
          px={4}
          borderRadius={'xl'}
          boxShadow={'xl'}
          width={'xs'}
        >
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="bold"
          >
            Deposit Your Tokens
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'md' }}> on any liquid stacking platform of your choice </Text>
        </Box>
        <Box
          bgColor={'bg.translucent'}
          py={8}
          px={4}
          borderRadius={'xl'}
          boxShadow={'xl'}
          width={'xs'}
        >
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            fontWeight="bold"
          >
            Deposit Your Tokens
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'md' }}> on any liquid stacking platform of your choice </Text>
        </Box>
      </Flex>
    </SectionContainer>
  );
};

export default LiquidStakingInfo;
