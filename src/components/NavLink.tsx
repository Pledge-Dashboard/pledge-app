import { useState, useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ href, displayString }: { href: string; displayString: string }) => {
  const router = useRouter();
  // const isActive = router.asPath == href ? true : false;

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
