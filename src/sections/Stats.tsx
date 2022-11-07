import { Flex, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const Stats = () => {
  return (
    <Flex
      h="95vh"
      id="Statistics"
      as="section"
      w="full"
      align={'center'}
      flexDir={'column'}
      py={8}
    >
      <Text
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight={500}
        bg="bg.gradient"
        backgroundClip="text"
      >
        stats!
      </Text>
      {/* <Tabs variant="unstyled">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </Flex>
  );
};
