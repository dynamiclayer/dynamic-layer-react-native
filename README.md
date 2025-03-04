## Getting Started

Follow these steps to set up and run the Dynamic Layer React Native project.

### Prerequisites

1. **Visual Studio Code**

   - Download and install the latest version of [Visual Studio Code](https://code.visualstudio.com/)
   - Recommended extensions:
     - React Native Tools
     - ESLint
     - Prettier

2. **Node.js**

   - Install the latest LTS version of [Node.js](https://nodejs.org/)
   - Verify installation by running:
     ```bash
     node --version
     npm --version
     ```

3. **Git**

   - Install [Git](https://git-scm.com/) for version control
   - Verify installation:
     ```bash
     git --version
     ```

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dynamiclayer/dynamic-layer-react-native.git
   cd dynamic-layer-react-native
   ```

2. **Install Dependencies**
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Project

1. **Start the Development Server**
   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

2. **Running on Different Platforms**

   - Press `a` to run on Android emulator/device
   - Press `i` to run on iOS simulator (macOS only)
   - Press `w` to run in web browser

### Additional Information

- The development server will start at `http://localhost:19002`
- Use the Expo Go app on your mobile device to test the app by scanning the QR code
- Make sure your development machine and mobile device are on the same network

### Troubleshooting

If you encounter any issues:

1. Clear the Metro bundler cache:

   ```bash
   npm start --reset-cache
   ```

2. Make sure all dependencies are properly installed:

   ```bash
   rm -rf node_modules
   npm install
   ```

3. Verify that your development environment is properly set up according to the prerequisites

## Usage Guide

### Project Structure

The project follows a modular architecture with the following structure:

```
src/
├── animations/      # Custom animation components
├── components/      # Reusable UI components
├── config/          # Configuration files
├── navigation/      # Navigation setup
├── screens/         # Application screens
└── style.js         # Global styles
```

### Components

Located in `src/components/`, the app includes several reusable components:

#### Common Components

- `CustomButton.js`
- `CustomButtonDock.js`
- `CustomButtonIcon.js`
- `CustomCard.js`
- `CustomInput.js`
- `NotificationBadge.js`

#### Navigation Components

- `CustomTabNavigator.js` - Custom bottom tab navigation
- `CustomTopNavigation.js` - Custom top navigation bar

### Navigation

The app's navigation is managed through `src/navigation/AppNavigator.js`, which sets up the routing structure. It utilizes React Navigation for seamless screen transitions.

### Screens

The application screens are organized in `src/screens/` with two main directories:

- `Main/` - Primary application screens
- `PreviewScreens/` - Preview and demonstration screens

### Assets

The `assets/` directory contains:

- Icons (organized by category in `icons/`)
- Images and placeholder content
- SVG components in `icons/svg_js/`

### Customization

You can customize the app's appearance and behavior through:

- Global styles in `src/style.js`

### Example Usage

## Adding New Screens

### Option 1: Adding a Tab Screen

To add a new screen as a tab in the bottom navigation:

1. Create your screen component in `src/screens/Main/`:

   ```javascript
   // src/screens/Main/NewScreen.js
   import React from "react";
   import { View, Text } from "react-native";
   import { CustomButton } from "../../components/common/CustomButton";

   export const NewScreen = () => {
     return (
       <View>
         <Text>New Screen</Text>
         <CustomButton text="Click Me" onPress={() => {}} />
       </View>
     );
   };
   ```

2. Add the screen to the tab configuration in `src/navigation/AppNavigator.js`:

   ```javascript
   import HomeScreen from "../screens/Main/HomeScreen";
   import ProfileScreen from "../screens/Main/ProfileScreen";
   import ButtonScreen from "../screens/PreviewScreens/buttonScreen";

   const tabScreens = [
     { name: "Home", component: HomeScreen, icon: HomeIcon, notifications: 0 },
     { name: "Templates", component: ProfileScreen, icon: TemplatesIcon, notifications: 5 },
     { name: "NewTab", component: NewScreen, icon: YourIcon, notifications: 0 },
   ];

   function MainTabScreen() {
     return <CustomTabNavigator type="md" screens={tabScreens} />;
   }
   ```

### Option 2: Adding a Default Screen

1. Create your screen component in `src/screens/Main/` or `src/screens/PreviewScreens/`:

   ```javascript
   import React from "react";
   import { View, Text } from "react-native";
   import { CustomButton } from "../../components/common/CustomButton";

   export const NewScreen = () => {
     return (
       <View>
         <Text>New Screen</Text>
         <CustomButton text="Click Me" onPress={() => {}} />
       </View>
     );
   };
   ```

2. Add the screen to the MainStack navigator in `src/navigation/AppNavigator.js`:

   ```javascript
   <MainStack.Navigator screenOptions={defaultScreenOptions}>
     <MainStack.Screen name="MainTabs" component={MainTabScreen} options={{ headerShown: false }} />
     <MainStack.Screen name="NewScreen" component={NewScreen} options={{ title: "New Screen" }} />
   </MainStack.Navigator>
   ```

3. Using Navigation:

   ```javascript
   import { useNavigation } from "@react-navigation/native";

   const MyComponent = () => {
     const navigation = useNavigation();
     return (
       <CustomButton title="Go to Screen" onPress={() => navigation.navigate("ScreenName")} />
     );
   };
   ```

