import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

export interface AppProps {}

const guestBellTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#10bdc7',
    },
    secondary: {
      main: '#555555',
    },
    background: {
      default: '#eee',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App: React.SFC<AppProps> = props => {
  return (
    <MuiThemeProvider theme={guestBellTheme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>{routes}</Router>
    </MuiThemeProvider>
  );
};

export default App;
