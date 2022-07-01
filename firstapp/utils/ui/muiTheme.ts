// https://material-ui.com/customization/theming/

// import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },

  //////////////////////////////////////////////////////////////////////
  palette: {
    primary: {
      main: '#022B36',
    },
    secondary: {
      main: '#036681',
    },
    error: { main: '#d3223b' },
    background: { default: '##fff', paper: '#fff' },
    // background: { default: '#FDF6E3', paper: '#fff' },
    text: {
      primary: '#022b36',
      secondary: '#036681',
    },
  },

  // ///////////////////////////////////////////////////////////////////////
  components: {
    MuiButton: {
      defaultProps: {
        fullWidth: false,
        style: {
          height: '40px',
          fontWeight: 'bold',
        },
      },
      styleOverrides: {
        text: {
          textTransform: 'capitalize',
          fontSize: '15px',
          fontWeight: 'bold',
        },
        contained: {
          textTransform: 'capitalize',
          backgroundColor: '#022b36',
          color: '#FDF6E3',
          '&:hover': {
            backgroundColor: '#023b4b',
          },
        },
        outlined: {
          textTransform: 'capitalize',
          color: '#FDF6E3',
          backgroundColor: '#8798ad',
          border: '1px solid #022b36',
          '&:hover': {
            backgroundColor: '#e0e7ff',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 'bolder',
          fontSize: '34px',
          '@media (min-width: 768px)': {
            fontSize: '52px',
          },
        },
        h2: {
          fontWeight: 'bolder',
          lineHeight: '1.20',
          fontSize: '28px',
          '@media (min-width: 768px)': {
            fontSize: '34px',
          },
        },
        h3: {
          fontWeight: 'bolder',
          lineHeight: '1.20',
          fontSize: '24px',
          '@media (min-width: 768px)': {
            fontSize: '28px',
          },
        },
        h4: {
          fontWeight: 'bolder',
          lineHeight: '1.20',
          fontSize: '22px',
          '@media (min-width: 768px)': {
            fontSize: '24px',
          },
        },
        h5: {
          fontWeight: 'bolder',
          lineHeight: '1.20',
          fontSize: '18px',
          '@media (min-width: 768px)': {
            fontSize: '22px',
          },
        },
        h6: {
          fontWeight: 'bolder',
          lineHeight: '1.20',
          fontSize: '16px',
          '@media (min-width: 768px)': {
            fontSize: '18px',
          },
        },
        paragraph: {
          fontSize: '15px',
          '@media (min-width: 768px)': {
            fontSize: '16px',
          },
        },
        body1: {
          fontSize: '16px',
        },
        body2: {
          fontSize: '15px',
        },
        subtitle1: {
          fontSize: '14px',
        },
        subtitle2: {
          fontSize: '12px',
        },
      },
    },
  },
});
