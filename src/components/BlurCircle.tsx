import { Box, ChakraProps } from '@chakra-ui/react';
import { FC } from 'react';

const BlurCircle: FC<ChakraProps> = ({ blur, opacity = '0.25', width = '96', ...props }) => {
  return (
    <Box
      width={width}
      height={width}
      opacity={opacity}
      filter={`blur(${blur}px)`}
      borderRadius="50%"
      bg="bg.gradient"
      zIndex={-1}
      {...props}
    />
  );
};

export default BlurCircle;
