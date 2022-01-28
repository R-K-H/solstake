import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import DApp from './views/DApp';
import { Landing } from './views/Landing';
import { Wallet } from './contexts/wallet';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { EpochProvider } from './contexts/epoch';
import { AccountsProvider } from './contexts/accounts';
import { SnackbarProvider } from 'notistack';
import { ValidatorsProvider } from './contexts/validators';

function App() {
  return (
    <Wallet>
      <AccountsProvider>
        <EpochProvider>
          <ValidatorsProvider>
            <SnackbarProvider maxSnack={5} autoHideDuration={10000}>
              <ThemeProvider theme={theme}>
                <Router>
                  <Route exact path='/' component={Landing} />
                  <Route path={['/app/validator/:validator', '/app']} component={DApp} />
                </Router>
              </ThemeProvider>
            </SnackbarProvider>
          </ValidatorsProvider>
        </EpochProvider>
      </AccountsProvider>
    </Wallet>
  );
}

export default App;
