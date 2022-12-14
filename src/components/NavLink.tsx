import NextLink from 'next/link';
import { ChakraProps, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';

export const NavLink: FC<
  ChakraProps & {
    href: string;
    displayString: string;
    hidePseudo?: boolean;
    onClick?: () => void;
  }
> = ({ href, displayString, hidePseudo, onClick, ...props }) => {
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
        onClick={onClick}
        _hover={{
          _after: {
            width: width !== '0' ? '3ch' : '1.5ch',
          },
        }}
        _after={{
          content: '""',
          position: 'absolute',
          right: '2',
          width: width,
          height: '2px',
          display: hidePseudo ? 'none' : 'block',
          bg: 'bg.gradient',
          transition: 'width 0.3s ease-in-out',
        }}
        {...props}
      >
        {displayString}
      </Link>
    </NextLink>
  );
};
