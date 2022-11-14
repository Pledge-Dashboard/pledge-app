import { useState, useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ href, displayString }: { href: string; displayString: string }) => {
  const router = useRouter();

  const [width, setWidth] = useState('0');
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(router.asPath === href ? true : false);
    setWidth(router.asPath === href ? '3ch' : '0');
  }, [href, router]);

  return (
    <NextLink
      legacyBehavior
      href={href}
      passHref
      scroll={false}
    >
      <Link
        textAlign={'right'}
        fontWeight={active ? '600' : '500'}
        fontSize="18"
        position={'relative'}
        _hover={{
          _after: {
            width: width !== '0' ? '3ch' : '1.5ch',
          },
        }}
        _after={{
          content: '""',
          position: 'absolute',
          right: '0',
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
