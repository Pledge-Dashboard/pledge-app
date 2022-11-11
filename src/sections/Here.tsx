import { Flex, Text } from '@chakra-ui/react';

export const Here = () => {
  return (
    <Flex
      minHeight="95vh"
      id="Here"
      as="section"
      w="full"
      align={'center'}
      flexDir={'column'}
      py={8}
    >
      <Text
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight={500}
        bg="bg.gradient"
        backgroundClip="text"
        mb={12}
      >
        here.
      </Text>
    </Flex>
  );
};
