import { JSXElementConstructor, ReactComponentElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  id: string;
  title: string;
  children: ReactComponentElement<any, any> | JSXElementConstructor<any>;
}

export const SectionContainer = ({ id, title, children }: Props) => {
  return (
    <Flex
      minHeight="95vh"
      id={id}
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
        {title}
      </Text>
      <>{children}</>
    </Flex>
  );
};
