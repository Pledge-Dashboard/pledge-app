import { Box, ChakraProps } from '@chakra-ui/react';
import { FC } from 'react';
import 'css-doodle';

const CssDoodle: FC<ChakraProps & { doodle: string }> = ({ doodle, ...props }) => {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: doodle,
      }}
      {...props}
    />
  );
};

export default CssDoodle;
