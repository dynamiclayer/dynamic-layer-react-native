import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { colors, paddings, rounded, textStyles } from '../../style';
import LoadingDots from "../../animations/LoadingDots";

// Define styles for different button types
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

// Define styles for different button states
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

// Define styles for different button sizes
const sizeStyles = {
  1: { height: 32, paddingHorizontal: paddings.p_12 },
  2: { height: 40, paddingHorizontal: paddings.p_16 },
  3: { height: 48, paddingHorizontal: paddings.p_16 },
  4: { height: 56, paddingHorizontal: paddings.p_24 },
};

// Function to combine styles based on type, state, and size
const getCombinedStyles = (type, state, size) => {
  const typeStyle = typeStyles[type];             // Get styles based on button type
  const stateStyle = stateStyles[state]?.[type];  // Get styles based on button state
  const sizeStyle = sizeStyles[size];             // Get styles based on button size

  return {
    ...typeStyle,
    ...stateStyle,
    ...sizeStyle,
  };
};

// --------------------------------------------
// CustomButton component definition
// --------------------------------------------
const CustomButton = ({
  containerStyle,     // Custom styles for the button container
  onPress,            // Function to call when the button is pressed
  text = "",          // Text to display on the button
  type = "secondary", // Button type (primary, secondary, tertiary, ghost)
  size = 4,           // Button size (1 to 4)
  leftIcon,           // Icon to display on the left side of the button
  rightIcon,          // Icon to display on the right side of the button
  loading = false,    // Whether the button is in a loading state
  disabled = false,   // Whether the button is disabled
  scaling = "full",   // Scaling option for the button
}) => {
  // State to manage button state (default, pressed, etc.)
  const [buttonState, setButtonState] = useState('default');
  const state = loading ? 'loading' : (disabled ? 'disabled' : buttonState); // Determine the current state of the button
  const combinedStyles = getCombinedStyles(type, state, size); // Get the combined styles based on type, state, and size

  // --------------------------------------------
  // Handlers for button press events
  // --------------------------------------------

  // Set state to pressed when the button is pressed in
  const handlePressIn = () => {
    if (!disabled && !loading) {
      setButtonState('pressed');
    }
  };

  // Set state to default when the button is released
  const handlePressOut = () => {
    if (!disabled && !loading) {
      setButtonState('default');
    }
  };

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress(); // Call the onPress function when the button is pressed
    }
  };

  // --------------------------------------------
  // Render the button
  // --------------------------------------------
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

// Styles for the button content
const styles = StyleSheet.create({
  text: {
    ...textStyles.text_base_bold, // Apply base bold text style
    textAlign: "center",          // Center align text
  },
  contentContainer: {
    flexDirection: "row",     // Arrange content in a row (needed for icons)
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;