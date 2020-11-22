import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings177371Navigator from '../features/Settings177371/navigator';
import Settings177356Navigator from '../features/Settings177356/navigator';
import NotificationList177355Navigator from '../features/NotificationList177355/navigator';
import Maps177354Navigator from '../features/Maps177354/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings177371: { screen: Settings177371Navigator },
Settings177356: { screen: Settings177356Navigator },
NotificationList177355: { screen: NotificationList177355Navigator },
Maps177354: { screen: Maps177354Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
