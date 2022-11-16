import { Flex } from '@chakra-ui/react';
import ChartContainer from '../components/ChartContainer';
import InfoContainer from '../components/InfoContainer';
import { SectionContainer } from '../layouts/SectionContainer';

export const Stats = () => {
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
      >
        <ChartContainer platform="lido" />
        <InfoContainer />
      </Flex>
    </SectionContainer>
  );
};
