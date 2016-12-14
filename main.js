import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';
import { NavigationContext, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { Provider as ReduxProvider } from 'react-redux';

import Router from './navigation/Router';
import App from './components/App';
import store from './state/store';

const navigationContext = new NavigationContext({
  router: Router
});

import { COLOR, ThemeProvider } from 'react-native-material-ui';


const uiTheme = {
  palette: {
    primaryColor: COLOR.blueGrey700,
  },
  toolbar: {
    container: {
      height: 50,
    },
  }
};

const AppContainer = () => (
  <ReduxProvider store={store}>
  	<ThemeProvider uiTheme={uiTheme}>
      <NavigationProvider context={navigationContext}>
        <App />
      </NavigationProvider>
    </ThemeProvider>
  </ReduxProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

Exponent.registerRootComponent(AppContainer);
