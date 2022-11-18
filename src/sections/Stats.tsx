import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ChartContainer from '../components/ChartContainer';
import InfoContainer from '../components/InfoContainer';
import { SectionContainer } from '../layouts/SectionContainer';
import { PlatformNames } from '../types';

export const Stats = () => {
  const [platform, setPlatform] = useState<PlatformNames | 'all'>('all');
  return (
    <SectionContainer
      id="Statistics"
      title="stats!"
    >
      <Flex
        w="100%"
        h="60%"
        flex={1}
        alignContent="center"
        wrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        <ChartContainer
          platform={platform}
          setPlatform={setPlatform}
        />
        <InfoContainer platform={platform} />
      </Flex>
    </SectionContainer>
  );
};
