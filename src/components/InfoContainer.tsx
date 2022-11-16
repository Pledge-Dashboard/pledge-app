import { Box, Grid, Heading, Code } from '@chakra-ui/react';
import { FC } from 'react';

const InfoContainer: FC = () => {
  return (
    <Box
      id="info-container"
      w="50%"
      h={{ base: '100%', md: '50%' }}
      p="2rem 3rem"
      m="auto"
      ml="-10%"
      bg="#000C3D"
    >
      <Heading
        as="h4"
        size="lg"
        mb="8"
      >
        Lido
      </Heading>
      <Grid
        templateColumns="1fr 1fr"
        gridGap="4"
      >
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          APY: 100%
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          Stakers: 100
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          stMATIC/MATIC: 1.11
        </Code>
        <Code
          bg="whiteAlpha.100"
          p="1rem"
          borderRadius="sm"
          fontSize="sm"
        >
          stMATIC/USD: 1.12
        </Code>
      </Grid>
    </Box>
  );
};

export default InfoContainer;
