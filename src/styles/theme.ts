import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#252525",
      "800": "#494949",
      "700": "#ABABAB",
      "300": "#EBEBEB",
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.300',
        color: 'gray.800',
      }
    }
  }
})
