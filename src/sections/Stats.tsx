import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import GenericChart from '../components/GenericChart';
import { SectionContainer } from '../layouts/SectionContainer';

export const Stats = () => {
  return (
    <SectionContainer
      id="statistics"
      title="stats!"
    >
      <Tabs
        variant="unstyled"
        mt={12}
      >
        <TabList gap={{ base: 4, md: 8 }}>
          {['Stader', 'Lido', 'Claystack', 'Ankr', 'Tenderize'].map((tab, index) => (
            <Tab
              _selected={{ color: 'white', bg: 'bg.translucent' }}
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
                    bg="bg.translucent"
                    w={32}
                    h={32}
                    borderRadius={'full'}
                    mb={8}
                  />
                  <Box
                    bg="bg.translucent"
                    w={48}
                    h={32}
                    borderRadius={'12'}
                  />
                </Flex>
                <Box>
                  <Box
                    bg="bg.translucent"
                    w={72}
                    h={12}
                    borderRadius={'12'}
                    mb={8}
                  />
                  <Box
                    bg="bg.translucent"
                    w={72}
                    h={56}
                    borderRadius={'12'}
                  />
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>

        <Box>
          <GenericChart />
        </Box>
      </Tabs>
    </SectionContainer>
  );
};
