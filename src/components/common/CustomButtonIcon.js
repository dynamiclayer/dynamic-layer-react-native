import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { colors, paddings, rounded, textStyles } from '../../style';
import LoadingDots from "../../animations/LoadingDots";

const typeStyles = {
  primary: { backgroundColor: colors.violet500, textColor: colors.white },
  secondary: { backgroundColor: colors.grey800, textColor: colors.white },
  tertiary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey200,
    textColor: colors.black,
  },
};

const stateStyles = {
  default: {
    primary: { backgroundColor: colors.violet500 },
    secondary: { backgroundColor: colors.grey800 },
    tertiary: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.grey200 },
  },
  hover: {
    primary: { backgroundColor: colors.violet600 },
    secondary: { backgroundColor: colors.grey900 },
    tertiary: { backgroundColor: colors.grey50 },
  },
  pressed: {
    primary: { backgroundColor: colors.violet700 },
    secondary: { backgroundColor: colors.black },
    tertiary: { backgroundColor: colors.grey100 },
  },
  disabled: {
    primary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    secondary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    tertiary: { backgroundColor: colors.white, textColor: colors.grey500, borderColor: colors.grey500, borderWidth: 1 },

  },
  loading: {
    primary: { backgroundColor: colors.violet500 },
    secondary: { backgroundColor: colors.grey800 },
    tertiary: { backgroundColor: colors.white },
  },
};

const sizeStyles = {
  1: { height: 32, padding: paddings.p_4 },
  2: { height: 40, padding: paddings.p_8 },
  3: { height: 48, padding: paddings.p_12 },
  4: { height: 56, padding: paddings.p_16 },
};

const getCombinedStyles = (type, state, size) => {
  const typeStyle = typeStyles[type];
  const stateStyle = stateStyles[state]?.[type];
  const sizeStyle = sizeStyles[size];

  return {
    ...typeStyle,
    ...stateStyle,
    ...sizeStyle,
  };
};

const CustomButtonIcon = ({
  containerStyle,
  onPress,
  type = "secondary",
  size = 4,
  icon,
  disabled = false,
}) => {
  const [buttonState, setButtonState] = useState('default');
  const state = disabled ? 'disabled' : buttonState;
  const combinedStyles = getCombinedStyles(type, state, size);

  const handlePressIn = () => {
    if (!disabled) {
      setButtonState('pressed');
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      setButtonState('default');
    }
  };

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={[
        {
          backgroundColor: combinedStyles.backgroundColor,
          height: combinedStyles.height,
          borderWidth: combinedStyles.borderWidth || 0,
          borderColor: combinedStyles.borderColor || "transparent",
          padding: combinedStyles.padding,
          borderRadius: rounded.rounded_md,
          alignItems: "center",
          justifyContent: "center",
          maxHeight: combinedStyles.height,
          maxWidth: combinedStyles.height
        },
        containerStyle,
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <View style={styles.contentContainer}>
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  },
});

export default CustomButtonIcon;