import { Box, ChakraProps } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import 'css-doodle';

const CssDoodle: FC<ChakraProps & { doodle: string }> = ({ doodle, ...props }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      visibility={mounted ? 'visible' : 'hidden'}
      dangerouslySetInnerHTML={{
        __html: doodle,
      }}
      {...props}
    />
  );
};

export default CssDoodle;
