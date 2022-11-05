import { Box, Flex, Text, chakra, Image, Spacer, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SideDrawer } from './SideDrawer';

export const Navbar = () => {
  return (
    <chakra.header
      bg={'transparent'}
      px={{ base: 4, md: 16, lg: 16 }}
      py={4}
      position={'fixed'}
      top={0}
      width={'full'}
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
        {/* @TODO: Add Links in Here & Hide SideDrawer in mobiles*/}
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
        <SideDrawer />
      </chakra.nav>
    </chakra.header>
  );
};

const NavLink = ({ href, displayString }: { href: string; displayString: string }) => {
  const router = useRouter();
  const isActive = router.asPath == href ? true : false;

  const [width, setWidth] = useState('0');

  useEffect(() => setWidth(router.asPath == href ? '3ch' : '0'), [href, router]);

  return (
    <NextLink
      legacyBehavior
      href={href}
      passHref
      scroll={false}
    >
      <Link
        _hover={{
          _after: {
            width: width !== '0' ? '3ch' : '1.5ch',
          },
        }}
        _after={{
          content: '""',
          width: width,
          height: '2px',
          display: 'block',
          bg: 'bg.gradient',
          transition: 'width 0.3s ease-in-out',
        }}
      >
        {displayString}
      </Link>
    </NextLink>
  );
};
