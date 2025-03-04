// Import necessary modules and components
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { textStyles, colors, rounded, paddings } from "../../style";
import SuccessIcon from "../../../assets/icons/svg_js/successIcon";
import ErrorIcon from "../../../assets/icons/svg_js/errorIcon";
import EyeIcon from "../../../assets/icons/svg_js/eyeIcon";
import EyeOffIcon from "../../../assets/icons/svg_js/eyeOffIcon";
import DisabledIcon from "../../../assets/icons/svg_js/disabledIcon";

/**
 * Helper component to conditionally render icons
 * @param {boolean} condition - Whether to show the icon
 * @param {React.ComponentType} IconComponent - The icon component to render
 * @param {Object} style - Additional styles for the icon
 */
const Icon = ({ condition, IconComponent, style }) =>
  condition ? <IconComponent style={style} /> : null;

/**
 * CustomInput Component
 * A versatile text input component with floating label, error states, and icon support
 *
 * @param {Object} containerStyle - Custom styles for the input container
 * @param {string} placeholder - Placeholder text that becomes the floating label
 * @param {Function} onChangeText - Callback when text changes
 * @param {string} error - Error message to display
 * @param {boolean} success - Whether the input is in a success state
 * @param {boolean} disabled - Whether the input is disabled
 * @param {React.ReactNode} leftIcon - Icon to display on the left side
 * @param {React.ReactNode} rightIcon - Icon to display on the right side
 * @param {Function} onEndEditing - Callback when editing ends
 * @param {number} size - Input size (1-3)
 * @param {string} value - Controlled input value
 * @param {boolean} isHighlighted - Whether the input should be highlighted
 */
const CustomInput = ({
  containerStyle,
  placeholder,
  onChangeText,
  error,
  success,
  disabled,
  leftIcon,
  rightIcon,
  onEndEditing,
  size = 3,
  value,
  isHighlighted = false,
  ...props
}) => {
  // Size configurations for different input sizes
  const sizeOptions = {
    1: {
      height: 40,
      textNormalSize: 16,
      paddingHorizontal: 12,
      paddingVertical: 1,
    },
    2: {
      height: 48,
      textNormalSize: 16,
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
    3: {
      height: 56,
      textNormalSize: 16,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  };
  const { height, textNormalSize, paddingHorizontal, paddingVertical } =
    sizeOptions[size];

  // State management
  const [isFocusedInternal, setIsFocusedInternal] = useState(false);
  const isFocused = isFocusedInternal || isHighlighted;
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const [internalValue, setInternalValue] = useState("");
  const isControlled = value !== undefined && value !== null;
  const currentValue = isControlled ? value : internalValue;
  const labelPosition = useRef(
    new Animated.Value(currentValue ? 1 : 0)
  ).current;

  // Animate the floating label
  const animatedLabel = (toValue) => {
    Animated.timing(labelPosition, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // Update label position when value or focus changes
  useEffect(() => {
    animatedLabel(currentValue ? 1 : isFocused ? 1 : 0);
  }, [currentValue, isFocused]);

  // Handle focus events
  const handleFocus = useCallback(() => {
    if (!disabled) {
      setIsFocusedInternal(true);
      animatedLabel(1);
    }
  }, [disabled]);

  // Handle blur events
  const handleBlur = useCallback(() => {
    if (!disabled) {
      setIsFocusedInternal(false);
      if (!currentValue && !isHighlighted) {
        animatedLabel(0);
      }
    }
  }, [disabled, currentValue, isHighlighted]);

  // Handle text changes
  const handleTextChange = useCallback(
    (newText) => {
      if (onChangeText) onChangeText(newText);
      if (!isControlled) setInternalValue(newText);
      animatedLabel(newText ? 1 : isFocused ? 1 : 0);
    },
    [onChangeText, isFocused, isControlled]
  );

  const LabelOutput = () => (height - paddingVertical * 2 - textNormalSize) / 2;

  const labelStyle = {
    left: leftIcon ? 24 + paddingHorizontal : 0,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [LabelOutput(), 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [textNormalSize, 12],
    }),
  };

  return (
    <View
      style={[
        styles.innerContainer,
        { height, paddingHorizontal, paddingVertical },
        isFocused && styles.focused,
        isFocused && {
          paddingHorizontal: paddingHorizontal - 1,
          paddingVertical: paddingVertical - 1,
        },
        disabled && styles.disabled,
        containerStyle,
        error ? { marginBottom: paddings.p_24 } : {},
      ]}
    >
      <View style={{ flex: 1 }}>
        <Animated.Text
          style={[
            styles.label,
            labelStyle,
            error && styles.errorLabel,
            disabled && styles.disabledLabel,
          ]}
        >
          {placeholder}
        </Animated.Text>
        <View style={styles.inputContainer}>
          {leftIcon && <View>{leftIcon}</View>}
          <TextInput
            {...props}
            style={[
              styles.input,
              { paddingLeft: leftIcon ? paddingHorizontal : 0, height: "100%" },
              Platform.OS === "android" && { paddingVertical: 0 },
              disabled && styles.disabledInput,
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            onEndEditing={onEndEditing}
            value={currentValue}
            textAlignVertical="center"
            textContentType={props.secureTextEntry ? "password" : "none"}
            secureTextEntry={showPassword}
            editable={!disabled}
          />
          {rightIcon && !props.secureTextEntry && (
            <View style={styles.rightIconContainer}>{rightIcon}</View>
          )}
          {props.secureTextEntry && !disabled && (
            <TouchableOpacity
              style={styles.rightIconContainer}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </TouchableOpacity>
          )}
          <Icon
            condition={!props.secureTextEntry && (error || success)}
            IconComponent={error ? ErrorIcon : SuccessIcon}
            style={styles.icon}
          />
          <Icon
            condition={disabled}
            IconComponent={DisabledIcon}
            style={styles.icon}
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

// Styles for the input component
const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: colors.grey200,
    borderRadius: rounded.rounded_md,
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  focused: { borderColor: colors.black, borderWidth: 2 },
  disabled: { backgroundColor: colors.grey100 },
  label: {
    position: "absolute",
    color: colors.grey500,
    ...textStyles.text_xs_regular,
  },
  errorLabel: { color: colors.red500 },
  disabledLabel: { color: colors.grey500, textDecorationLine: "line-through" },
  inputContainer: { flexDirection: "row", alignItems: "center" },
  leftIconContainer: { justifyContent: "center", alignItems: "center" },
  rightIconContainer: { justifyContent: "center", alignItems: "center" },
  input: {
    flex: 1,
    ...textStyles.text_base_regular,
    height: "100%",
    marginTop: paddings.p_12,
  },
  disabledInput: { color: colors.grey500 },
  iconContainer: { justifyContent: "center", alignItems: "center" },
  icon: { width: 24, height: 24 },
  errorText: {
    paddingTop: paddings.p_16,
    ...textStyles.text_sm_medium,
    color: colors.red500,
  },
});

export default CustomInput;
