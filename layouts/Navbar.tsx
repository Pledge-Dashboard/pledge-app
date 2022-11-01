import { Box, Flex, Text } from '@chakra-ui/react';
import { SideDrawer } from './SideDrawer';

export const Navbar = () => {
  return (
    <Box
      bg={'transparent'}
      px={{ base: 4, md: 16, lg: 32 }}
      position={'fixed'}
      top={0}
      width={'full'}
    >
      <Flex
        h={24}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text
          fontSize={['2xl', '2xl', '3xl']}
          fontWeight={'bold'}
        >
          Pledge
        </Text>
        {/* @TODO: Add Links in Here & Hide SideDrawer in mobiles*/}
        <SideDrawer />
      </Flex>
    </Box>
  );
};
