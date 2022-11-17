import { Flex, Box, Text } from '@chakra-ui/react';

interface StakeInfoCardProps {
  title: string;
  description: string;
  cardWidth: { base: string; md: string; lg: string };
  textWidth: { base: string; md: string; lg: string };
  alignment: string;
}

export const StakeInfoCard = ({ title, description, cardWidth, textWidth, alignment }: StakeInfoCardProps) => {
  return (
    <Flex
      alignItems={alignment}
      bgColor={'bg.translucent'}
      flexDirection={'column'}
      mb={{ base: 8, md: 12, lg: 4 }}
      minH={'8rem'}
      textAlign={{ base: 'center', md: 'left' }}
      w={cardWidth}
    >
      <Box
        pb={{ base: 6 }}
        pl={{ base: 6, lg: 16 }}
        pr={{ base: 6, lg: 10 }}
        pt={{ base: 6, md: 12 }}
        width={textWidth}
      >
        <Text
          fontWeight={'bold'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          mb={4}
        >
          {title}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
      </Box>
    </Flex>
  );
};
