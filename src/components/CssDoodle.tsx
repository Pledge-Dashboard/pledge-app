import { Box, ChakraProps } from '@chakra-ui/react';
import { FC } from 'react';
import 'css-doodle';

const CssDoodle: FC<ChakraProps & { doodle: string }> = ({ doodle, ...props }) => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      dangerouslySetInnerHTML={{
        __html: doodle,
      }}
      {...props}
    />
  );
};

export default CssDoodle;
