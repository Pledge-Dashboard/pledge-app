import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { SectionContainer } from '../layouts/SectionContainer';

export const Stats = () => {
  return (
    <SectionContainer
      id="statistics"
      title="stats!"
    >
      <Tabs variant="unstyled">
        <TabList gap={{ base: 4, md: 8 }}>
          {['Stader', 'Lido', 'Claystack', 'Ankr', 'Tenderize'].map((tab, index) => (
            <Tab
              _selected={{ color: 'white', bg: '#D9D9D91A' }}
              borderRadius="12"
              px={{ base: 2, md: 8 }}
              fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
              key={index}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {['Stader', 'Lido', 'Claystack', 'Ankr', 'Tenderize'].map((tab, index) => (
            <TabPanel
              key={index}
              px={0}
            >
              <Flex
                w="full"
                align={'center'}
                py={8}
                px={8}
                justifyContent={'space-between'}
                flexDir={{ base: 'column', md: 'row' }}
              >
                <Flex
                  flexDir={'column'}
                  alignItems={'center'}
                >
                  <Box
                    bg="#D9D9D91A"
                    w={32}
                    h={32}
                    borderRadius={'full'}
                    mb={8}
                  />
                  <Box
                    bg="#D9D9D91A"
                    w={48}
                    h={32}
                    borderRadius={'12'}
                  />
                </Flex>
                <Box>
                  <Box
                    bg="#D9D9D91A"
                    w={72}
                    h={12}
                    borderRadius={'12'}
                    mb={8}
                  />
                  <Box
                    bg="#D9D9D91A"
                    w={72}
                    h={56}
                    borderRadius={'12'}
                  />
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </SectionContainer>
  );
};
