import { Box, Flex, Text, chakra, Image, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { NavLink } from '../components/NavLink';
import { SideDrawer } from './SideDrawer';

export const Navbar = () => {
  return (
    <chakra.header
      position={'fixed'}
      px={{ base: 4, md: 16, lg: 16 }}
      py={4}
      top={0}
      width={'full'}
      zIndex={999}
      backdropFilter={'auto'}
      backdropBlur={'md'}
      bg={'bg.translucent'}
    >
      <chakra.nav
        display={'flex'}
        gap="4"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <NextLink href="/">
          <Flex
            alignItems={'center'}
            gap="3"
            cursor="pointer"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={14}
              filter="drop-shadow(4px 4px 4px rgba(255, 120, 120, 0.2)) drop-shadow(2px 7px 10px rgba(190, 108, 255, 0.2))"
            />
            <Text
              as={'span'}
              fontSize={['xl', 'xl', '2xl']}
              fontWeight={500}
              bg="bg.gradient"
              backgroundClip="text"
            >
              pledge
            </Text>
          </Flex>
        </NextLink>

        <Spacer />

        <Flex
          display={{ base: 'none', md: 'flex' }}
          alignItems={'center'}
          gap="4"
        >
          <NavLink
            href="/#Statistics"
            displayString="Statistics"
          />
          <NavLink
            href="/#LiquidStaking"
            displayString="Liquid Staking"
          />
          <NavLink
            href="/#Platforms"
            displayString="Platforms"
          />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <SideDrawer />
        </Box>
      </chakra.nav>
    </chakra.header>
  );
};
