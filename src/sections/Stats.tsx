import { Flex, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

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
        mb={12}
      >
        stats!
      </Text>
      <Tabs variant="unstyled">
        <TabList gap={12}>
          {['Stader', 'Lido', 'Claystack', 'Ankr', 'Tenderize'].map((tab, index) => (
            <Tab
              _selected={{ color: 'white', bg: '#D9D9D91A' }}
              borderRadius="12"
              px={6}
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
    </Flex>
  );
};
