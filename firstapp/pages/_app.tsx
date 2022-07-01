import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../utils/ui/muiTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
