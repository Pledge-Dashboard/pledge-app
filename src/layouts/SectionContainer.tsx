import { ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export const SectionContainer = ({ id, title, children }: Props) => {
  return (
    <Flex
      id={id}
      as="section"
      w="full"
      align={'center'}
      flexDir={'column'}
      py={16}
      scrollMarginTop={16}
      minH={'95vh'}
    >
      <Text
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight={500}
        bg="bg.gradient"
        backgroundClip="text"
      >
        {title}
      </Text>
      <>{children}</>
    </Flex>
  );
};
