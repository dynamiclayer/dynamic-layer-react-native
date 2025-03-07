import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View, Pressable } from 'react-native';
import { colors, paddings, textStyles, rounded } from '../../style';
import CustomBadgeNotification from '../common/CustomBadgeNotification';

const Tab = createBottomTabNavigator();

const NotificationBadgeWrapper = ({ badge, notifications }) => (
  <>
    {badge === "md" && <CustomBadgeNotification size='md' notifications={notifications} top={-4} />}
    {badge === "sm" && <CustomBadgeNotification size='sm' notifications={notifications} top={0} />}
  </>
);

function CustomBottomNavigation({ badge = 'md', screens, functional = true }) {
  const [activeTab, setActiveTab] = useState(screens[0].name);

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        const screen = screens.find(screen => screen.name === route.name);
        const IconComponent = screen.icon;
        const notifications = screen.notifications;
        const isFocused = activeTab === route.name;

        return {
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                setActiveTab(route.name);
                if (functional) {
                  props.onPress();
                }
              }}
            >
              {props.children}
            </Pressable>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <IconComponent isHighlighted={isFocused} />
              <NotificationBadgeWrapper badge={badge} notifications={notifications} />
              <Text
                style={[
                  textStyles.text_xs_bold,
                  {
                    paddingTop: paddings.p_8,
                    color: isFocused ? colors.black : colors.grey500,
                  },
                ]}
                numberOfLines={1}
              >
                {screen.name}
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.select({
              ios: ((paddings.p_8 * 3) + 24 + 16) * 1.5,
              android: paddings.p_8 * 3 + 24 + 16,
            }),
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 1,
          },
        };
      }}
    >
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeMD: {
    position: 'absolute',
    top: -4,
    right: 22.5,
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    justifyContent: 'center',
    paddingHorizontal: paddings.p_8,
    paddingsVertical: paddings.p_0,
    alignItems: 'center',
  },
  notificationBadgeSM: {
    position: 'absolute',
    top: -1,
    right: 39,
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    justifyContent: 'center',
    alignItems: 'center',
    height: 8,
    width: 8,
  },
  notificationText: {
    ...textStyles.text_xs_semibold,
    color: colors.white,
    textAlign: 'center',
  },
});

export default CustomBottomNavigation;