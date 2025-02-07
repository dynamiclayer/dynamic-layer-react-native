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
  ghost: {
    backgroundColor: colors.transparent,
    textColor: colors.violet500,
    textDecorationLine: "underline",
  },
};

const stateStyles = {
  default: {
    primary: { backgroundColor: colors.violet500 },
    secondary: { backgroundColor: colors.grey800 },
    tertiary: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.grey200 },
    ghost: { backgroundColor: colors.transparent, textColor: colors.violet500 },
  },
  hover: {
    primary: { backgroundColor: colors.violet600 },
    secondary: { backgroundColor: colors.grey900 },
    tertiary: { backgroundColor: colors.grey50 },
    ghost: { backgroundColor: colors.transparent, textColor: colors.violet600 },
  },
  pressed: {
    primary: { backgroundColor: colors.violet700 },
    secondary: { backgroundColor: colors.black },
    tertiary: { backgroundColor: colors.grey100 },
    ghost: { backgroundColor: colors.transparent, textColor: colors.violet700 },
  },
  disabled: {
    primary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    secondary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    tertiary: { backgroundColor: colors.white, textColor: colors.grey500, borderColor: colors.grey500, borderWidth: 1 },
    ghost: { backgroundColor: colors.transparent, textColor: colors.grey500 },
  },
  loading: {
    primary: { backgroundColor: colors.violet500 },
    secondary: { backgroundColor: colors.grey800 },
    tertiary: { backgroundColor: colors.white },
    ghost: { backgroundColor: colors.transparent, textColor: colors.violet500 },
  },
};

const sizeStyles = {
  1: { height: 32, paddingHorizontal: paddings.p_12 },
  2: { height: 40, paddingHorizontal: paddings.p_16 },
  3: { height: 48, paddingHorizontal: paddings.p_16 },
  4: { height: 56, paddingHorizontal: paddings.p_24 },
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

const CustomButton = ({
  containerStyle,
  onPress,
  text = "Button",
  type = "secondary",
  size = 4,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  scaling = "full",
}) => {
  const [buttonState, setButtonState] = useState('default');
  const state = loading ? 'loading' : (disabled ? 'disabled' : buttonState);
  const combinedStyles = getCombinedStyles(type, state, size);

  const handlePressIn = () => {
    if (!disabled && !loading) {
      setButtonState('pressed');
    }
  };

  const handlePressOut = () => {
    if (!disabled && !loading) {
      setButtonState('default');
    }
  };

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
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
          paddingHorizontal: combinedStyles.paddingHorizontal,
          borderRadius: rounded.rounded_md,
          alignItems: "center",
          justifyContent: "center",
          ...(scaling === "full" ? { flexGrow: 1 } : { alignSelf: "flex-start" }),
          maxHeight: combinedStyles.height,
        },
        containerStyle,
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
    >
      <View style={styles.contentContainer}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        {loading ? (
          <View style={styles.loadingContainer}>
            <LoadingDots />
          </View>
        ) : (
          <Text style={[styles.text, { color: combinedStyles.textColor, textDecorationLine: combinedStyles.textDecorationLine || "none" }]}>
            {text}
          </Text>
        )}
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    ...textStyles.text_base_bold,
    textAlign: "center",
  },
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
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;