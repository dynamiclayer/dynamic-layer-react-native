import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import CustomBottomNavigation from '../components/navigation/CustomBottomNavigation';
import CustomTopNavigation from '../components/navigation/CustomTopNavigation';

// Main Screens
import HomeScreen from '../screens/Main/HomeScreen';
import TemplatesScreen from '../screens/Main/TemplatesScreen';
import ButtonScreen from '../screens/PreviewScreens/buttonScreen';
import BottomNavigationScreen from '../screens/PreviewScreens/bottomNavigationScreen';
import InputFieldScreen from '../screens/PreviewScreens/inputFieldScreen';
import TopNavigationScreen from '../screens/PreviewScreens/topNavigationScreen';
import NotificationBadgeScreen from '../screens/PreviewScreens/notificationBadgeScreen';
import ButtonIconScreen from '../screens/PreviewScreens/buttonIconScreen';
import CustomCardScreen from '../screens/PreviewScreens/customCardScreen';
import ButtonDockScreen from '../screens/PreviewScreens/buttonDockScreen';

// Icons
import HomeIcon from '../../assets/icons/Navigation/homeIcon';
import TemplatesIcon from '../../assets/icons/Navigation/templateIcon';
import SettingsIcon from '../../assets/icons/Navigation/settingsIcon';
import BackIcon from '../../assets/icons/svg_js/backIcon';

const MainStack = createNativeStackNavigator();

// Navigation Options
const defaultScreenOptions = {
  header: ({ route, navigation, options }) => (
    <CustomTopNavigation
      size="md"
      title={options.title || route.name}
      iconLeft={<BackIcon />}
      iconLeftPressed={() => navigation.goBack()}
    />
  ),
};

// Tab Screen Configuration
const tabScreens = [
  { name: 'Home', component: HomeScreen, icon: HomeIcon, notifications: 0 },
  { name: 'Templates', component: TemplatesScreen, icon: TemplatesIcon, notifications: 5 },
  { name: 'Settings', component: TemplatesScreen, icon: SettingsIcon, notifications: 3 },
];

// Main Tab Navigation
function MainTabScreen() {
  return <CustomBottomNavigation badge="md" screens={tabScreens} />;
}

// Main Navigation
function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={defaultScreenOptions}>
      <MainStack.Screen name="MainTabs" component={MainTabScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="ButtonScreen" component={ButtonScreen} options={{ title: 'Button' }} />
      <MainStack.Screen name="ButtonIconScreen" component={ButtonIconScreen} options={{ title: 'Button Icon' }} /> 
      <MainStack.Screen name="BottomNavigationScreen" component={BottomNavigationScreen} options={{ title: 'Bottom Navigation' }} />
      <MainStack.Screen name="InputFieldScreen" component={InputFieldScreen} options={{ title: "Input Field" }} />
      <MainStack.Screen name="TopNavigationScreen" component={TopNavigationScreen} options={{ title: "Top Navigation" }} />
      <MainStack.Screen name="NotificationBadgeScreen" component={NotificationBadgeScreen} options={{ title: "Notification badge" }} />
      <MainStack.Screen name='CustomCardScreen' component={CustomCardScreen} options={{ title: 'Custom Card' }} />
      <MainStack.Screen name='CustomButtonDockScreen' component={ButtonDockScreen} options={{ title: 'Button Dock' }} />
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
