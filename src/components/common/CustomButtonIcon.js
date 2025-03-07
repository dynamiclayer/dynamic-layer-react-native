import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { colors, paddings, rounded, textStyles } from '../../style';
import LoadingDots from "../../animations/LoadingDots";

/**
 * Style configurations for different button types
 * Defines background colors, text colors, and border styles for each button type
 */
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

/**
 * Style configurations for different button states
 * Defines how buttons appear in different states: default, hover, pressed, disabled, loading
 */
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

/**
 * Style configurations for different button sizes
 * Defines height and padding for each size variant
 */
const sizeStyles = {
  xs: { height: 32, padding: paddings.p_4 },
  sm: { height: 40, padding: paddings.p_8 },
  md: { height: 48, padding: paddings.p_12 },
  lg: { height: 56, padding: paddings.p_16 },
};

/**
 * Combines styles based on button type, state, and size
 * @param {string} type - Button type (primary, secondary, tertiary)
 * @param {string} state - Button state (default, hover, pressed, disabled, loading)
 * @param {number} size - Button size (1-4)
 * @returns {Object} Combined style object
 */
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

/**
 * CustomButtonIcon Component
 * A button component that displays an icon with configurable styles and states
 * 
 * @param {Object} containerStyle - Custom styles for the button container
 * @param {Function} onPress - Function to call when button is pressed
 * @param {string} type - Button type: "primary", "secondary", or "tertiary"
 * @param {number} size - Button size: 1 (smallest) to 4 (largest)
 * @param {React.ReactNode} icon - Icon component to display
 * @param {boolean} disabled - Whether the button is disabled
 */
const CustomButtonIcon = ({
  containerStyle,
  onPress,
  type = "secondary",
  size = "lg",
  icon,
  state = "default",
}) => {
  const [buttonState, setButtonState] = useState('default');
  const currentState = state === 'default' ? buttonState : state;
  const combinedStyles = getCombinedStyles(type, state, size);

  // Handle button press events
  const handlePressIn = () => {
    if (state === 'default') {
      setButtonState('pressed');
    }
  };

  const handlePressOut = () => {
    if (state === 'default') {
      setButtonState('default');
    }
  };

  const handlePress = () => {
    if (state === 'default' && onPress) {
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
      disabled={state === 'disabled'}
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