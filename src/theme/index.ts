import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  bg: {
    main: '#151A2D',
    gradient: 'radial-gradient(106.94% 682.55% at 0% 28.07%, #BE6BFF 16.75%, #FF7878 100%)',
    translucent: '#D9D9D91A',
  },
  text: {
    _default: '#FAFAFA',
    gradient:
      'radial-gradient(106.94% 682.55% at 0% 28.07%, rgba(190, 107, 255, 0.75) 16.75%, rgba(255, 120, 120, 0.75) 100%) #ffffff',
  },
};
const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      fontSize: '16px',
    },
    body: {
      fontSize: '16px',
      background: props.theme.colors.bg.main,
      fontFamily: 'Manrope, sans-serif',
      color: props.theme.colors.text._default,
      width: '100vw',
      overflowX: 'clip',
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
