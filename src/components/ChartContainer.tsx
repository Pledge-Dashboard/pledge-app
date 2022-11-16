import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import FieldSwitcher from '../components/FieldSwitcher';
import { useContainerDimensions } from '../hooks/useContainerDimensions';
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
  const ref = useRef(null);
  const { height, width } = useContainerDimensions(ref);

  const [field, setField] = useState<FieldNames>('price');

  return (
    <Flex
      id="chart-container"
      w="60%"
      my="10rem"
      maxH="60rem"
      bg="#242C4D"
      justify="center"
      align="center"
      p={{ base: '5rem', md: '10rem 15rem 5rem 5rem' }}
      ref={ref}
      flexDir="column"
    >
      <PlatformSwitcher
        platform={platform}
        setPlatform={setPlatform}
      />
      <Box
        bg="blackAlpha.400"
        padding="5"
      >
        <Box mb="10">
          <FieldSwitcher
            field={field}
            setField={setField}
            platform={platform}
          />
        </Box>

        <GenericChart
          platform={platform}
          field={field}
          width={width - 28 * 10}
          height={height - 16 * 15}
        />
      </Box>
    </Flex>
  );
};

export default ChartContainer;
