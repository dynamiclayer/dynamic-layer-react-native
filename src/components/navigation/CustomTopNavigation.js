import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, paddings, textStyles } from '../../style';
import BackIcon from '../../../assets/icons/svg_js/backIcon';

const IconContainer = ({ icon, onPress, style }) => (
  <View style={[styles.iconContainer, style]}>
    {icon ? (
      <Pressable
        onPress={onPress}
        style={{ height: 56, width: 56, alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={styles.icon}>{icon}</View>
      </Pressable>
    ) : (
      <View style={styles.iconPlaceholder} />
    )}
  </View>
);

const CustomTopNavigation = ({
  size = 'md',
  title,
  iconLeft = null,
  iconRight = null,
  iconLeftPressed = null,
  iconRightPressed = null,
}) => {
  const insets = useSafeAreaInsets();
  const headerHeight = size === 'md' ? insets.top + 56 : 88;

  const defaultLook = () => (
    <SafeAreaView style={[styles.header, { height: headerHeight }]}>
      <IconContainer icon={iconLeft} onPress={iconLeftPressed} style={{ top: Platform.OS === 'ios' ? (headerHeight - insets.top - 24) / 2 : 0 }} />
      <Text style={[styles.title, { top: (headerHeight + 24) / 2, paddingHorizontal: 56 + 16 }]} numberOfLines={1}>
        {title}
      </Text>
      <IconContainer icon={iconRight} onPress={iconRightPressed} style={{ top: Platform.OS === 'ios' ? (headerHeight - insets.top - 24) / 2 : 0 }} />
    </SafeAreaView>
  );

  const largeLook = () => (
    <View style={[styles.headerLarge, { height: headerHeight }]}>
      <Text style={styles.largeTitle} numberOfLines={1}>{title}</Text>
      <IconContainer icon={iconLeft} onPress={iconLeftPressed} />
      <IconContainer icon={iconRight} onPress={iconRightPressed} />
    </View>
  );

  return size === 'md' ? defaultLook() : largeLook();
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.grey200,
  },
  headerLarge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: paddings.p_16
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  title: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    right: 0,
    flex: 1,
    textAlign: 'center',
    ...textStyles.text_base_semibold,
    ellipsizeMode: 'tail', // Kürzt am Ende mit ...
    overflow: 'hidden', // Text wird visuell abgeschnitten
    whiteSpace: 'nowrap', // Stellt sicher, dass es bei Web nicht umbricht
  },
  largeTitle: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: paddings.p_16,
    ...textStyles.text_4xl_bold,
    ellipsizeMode: 'tail', // Kürzt am Ende mit ...
    overflow: 'hidden', // Text wird visuell abgeschnitten
    whiteSpace: 'nowrap', // Stellt sicher, dass es bei Web nicht umbricht
  },
  rightIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
});

export default CustomTopNavigation;
