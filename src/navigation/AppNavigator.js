import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from '../AuthContext';

// Components
import CustomTabNavigator from '../components/navigation/CustomTabNavigator';
import CustomTopNavigation from '../components/navigation/CustomTopNavigation';

// Auth Screens
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import RegisterOrLogin from '../screens/Auth/RegisterOrLogin';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import AgreeTermsScreen from '../screens/Auth/AgreeTermsScreen';
import OnboardingScreen from '../screens/Auth/AccountDetails/OnboardingScreen';

// Main Screens
import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import ButtonScreen from '../screens/PreviewScreens/buttonScreen';
import BottomNavigationScreen from '../screens/PreviewScreens/bottomNavigationScreen';
import InputFieldScreen from '../screens/PreviewScreens/inputFieldScreen';
import ChipScreen from '../screens/PreviewScreens/chipScreen';
import LoadingScreen from '../screens/PreviewScreens/loadingScreen';
import TeaserScreen from '../screens/PreviewScreens/teaserScreen';
import TopNavigationScreen from '../screens/PreviewScreens/topNavigationScreen';
import BadgeScreen from '../screens/PreviewScreens/badgeScreen';
import NotificationBadgeScreen from '../screens/PreviewScreens/notificationBadgeScreen';

// Icons
import HomeIcon from '../../assets/icons/Navigation/homeIcon';
import TemplatesIcon from '../../assets/icons/Navigation/templateIcon';
import SettingsIcon from '../../assets/icons/Navigation/settingsIcon';
import BackIcon from '../../assets/icons/svg_js/backIcon';
import CustomTextAreaScreen from '../screens/PreviewScreens/customTextAreaScreen';
import BottomSheetScreen from '../screens/PreviewScreens/bottomSheetScreen';


const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

// Navigation Options
const defaultScreenOptions = {
  header: ({ route, navigation, options }) => (
    <CustomTopNavigation
      type="default"
      title={options.title || route.name}
      leftIcon={<BackIcon />}
      leftIconPress={() => navigation.goBack()}
    />
  ),
};

// Tab Screen Configuration
const tabScreens = [
  { name: 'Home', component: HomeScreen, icon: HomeIcon, notifications: 0 },
  { name: 'Templates', component: ProfileScreen, icon: TemplatesIcon, notifications: 5 },
  { name: 'Settings', component: ProfileScreen, icon: SettingsIcon, notifications: 3 },
];

// Auth Navigation
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={defaultScreenOptions}>
      <AuthStack.Screen 
        name="RegisterOrLogin" 
        component={RegisterOrLogin} 
        options={{ headerShown: false }} 
      />
      <AuthStack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ 
          title: "I have an account"
        }}
      />
      <AuthStack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ 
          title: "Sign up"
        }}
      />
      <AuthStack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen}  
        options={{ 
          title: "Forgot Password"
        }}
      />
      <AuthStack.Screen 
        name="AgreeTerms" 
        component={AgreeTermsScreen} 
        options={{ 
          title: "Agree our terms"
        }}
      />
      <AuthStack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}  
        options={{ 
          title: "Create Account"
        }}
      />
    </AuthStack.Navigator>
  );
}

// Main Tab Navigation
function MainTabScreen() {
  return <CustomTabNavigator type="md" screens={tabScreens} />;
}

// Main Navigation
function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={defaultScreenOptions}>
      <MainStack.Screen name="MainTabs" component={MainTabScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="ButtonScreen" component={ButtonScreen} options={{ title: 'Button' }} />
      <MainStack.Screen name="BottomNavigationScreen" component={BottomNavigationScreen} options={{ title: 'Bottom Navigation' }} />
      <MainStack.Screen name="InputFieldScreen" component={InputFieldScreen} options={{ title: "Input Field" }} />
      <MainStack.Screen name="ChipScreen" component={ChipScreen} options={{ title: "Chip" }} />
      <MainStack.Screen name="LoadingScreen" component={LoadingScreen} options={{ title: "Loading" }} />
      <MainStack.Screen name="TopNavigationScreen" component={TopNavigationScreen} options={{ title: "Top Navigation" }} />
      <MainStack.Screen name="BadgeScreen" component={BadgeScreen} options={{ title: "Badge" }} />
      <MainStack.Screen name="TeaserScreen" component={TeaserScreen} options={{ title: "Teaser" }} />
      <MainStack.Screen name="NotificationBadgeScreen" component={NotificationBadgeScreen} options={{ title: "Notification badge" }} />
      <MainStack.Screen name="CustomTextAreaScreen" component={CustomTextAreaScreen} options={{ title: "Textarea" }} />
      <MainStack.Screen name='BottomSheetScreen' component={BottomSheetScreen} options={{ title: 'Bottom Sheet' }} />
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
