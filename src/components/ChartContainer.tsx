import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
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
  platform: PlatformNames;
  setPlatform: (platform: PlatformNames) => void;
}) => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [field, setField] = useState<FieldNames>('price');

  return (
    <Flex
      id="chart-container"
      w={{ base: '100%', xl: '60%' }}
      my="5rem"
      mb={{ base: 0, xl: '5rem' }}
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
            width={isLargerThan1000 ? (isLargerThan1200 ? 600 : 400) : 300}
            height={isLargerThan1000 ? 400 : 300}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChartContainer;
