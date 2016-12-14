import { createRouter } from '@exponent/ex-navigation';
import MainScreen from '../screens/MainScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import RootNavigation from './RootNavigation';

const Router = createRouter(() =>
   ({
     expenses: () => ExpensesScreen,
     main: () => MainScreen,
     rootNavigation: () => RootNavigation
   })
);

export default Router;