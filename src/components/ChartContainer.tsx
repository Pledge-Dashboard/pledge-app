import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import FieldSwitcher from '../components/FieldSwitcher';
import { FieldNames, PlatformNames } from '../types';
import PlatformSwitcher from './PlatformSwitcher';
const GenericChart = dynamic(() => import('../components/GenericChart'), {
  ssr: false,
});

const ChartContainer = ({
  platform,
  setPlatform,
}: {
  platform: PlatformNames | 'all';
  setPlatform: (platform: PlatformNames | 'all') => void;
}) => {
  const [isLargerThanXl] = useMediaQuery('(min-width: 80em)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [isLargerThanMd] = useMediaQuery('(min-width: 48em)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [isLargerThanSm] = useMediaQuery('(min-width: 30em)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [field, setField] = useState<FieldNames>('price');
  useEffect(() => {
    if (platform === 'all') {
      setField('totalStaked');
    }
  }, [platform]);

  return (
    <Flex
      id="chart-container"
      w={{ base: '100%', lg: '60%', xl: '60%' }}
      my="5rem"
      maxH="60rem"
      bg="#242C4D"
      p={{ base: '2rem', xl: '3rem 11rem 3rem 2rem' }}
      flexDir="column"
    >
      <PlatformSwitcher
        platform={platform}
        setPlatform={setPlatform}
      />

      <Flex
        bg="blackAlpha.400"
        padding="5"
        flex={1}
        flexDir="column"
      >
        <FieldSwitcher
          field={field}
          setField={setField}
          platform={platform}
        />

        <Box m="auto">
          <GenericChart
            platform={platform}
            field={field}
            width={isLargerThanSm ? (isLargerThanMd ? (isLargerThanXl ? 500 : 300) : 400) : 300}
            height={isLargerThanMd ? 400 : 300}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChartContainer;
