import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, paddings, rounded, textStyles } from '../../style';

const stateStyles = {
  default: { backgroundColor: colors.white, textColor: colors.black },
  active: { backgroundColor: colors.grey50, textColor: colors.black },
  disabled: {
    backgroundColor: colors.white,
    textColor: colors.grey500,
    textDecorationLine: 'line-through',
  },
};

const sizeStyles = {
  1: {
    height: 28,
    paddingHorizontal: paddings.p_8,
    paddingVertical: paddings.p_0,
    marginRight: paddings.p_4,
    textStyle: textStyles.text_xs_regular,
    amountText: textStyles.text_xs_regular,
  },
  2: {
    height: 32,
    paddingHorizontal: paddings.p_12,
    paddingVertical: paddings.p_4,
    marginRight: paddings.p_4,
    textStyle: textStyles.text_sm_regular,
  },
  3: {
    height: 40,
    paddingHorizontal: paddings.p_16,
    paddingVertical: paddings.p_8,
    marginRight: paddings.p_8,
    textStyle: textStyles.text_base_regular,
  },
};

const CustomChip = ({
  disabled = false,
  size = 3,
  content = 'Default Content',
  hasAmount = false,
  amount = 0,
  onPress,
  onToggle,
  width,
  active = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  // Synchronize internal state with the active prop
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handlePress = () => {
    if (disabled) return;

    const newActiveState = !isActive;
    setIsActive(newActiveState);

    if (onToggle) {
      onToggle(content, newActiveState);
    }

    if (onPress) {
      onPress();
    }
  };

  const chipStateStyle = disabled
    ? stateStyles.disabled
    : isActive
    ? stateStyles.active
    : stateStyles.default;

  const chipSizeStyle = sizeStyles[size] || sizeStyles[3];

  return (
    <Pressable
      style={[
        styles.flexBox,
        {
          backgroundColor: chipStateStyle.backgroundColor,
          height: chipSizeStyle.height,
          paddingHorizontal: chipSizeStyle.paddingHorizontal,
          paddingVertical: chipSizeStyle.paddingVertical,
          width: width,
        },
      ]}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text
        style={[
          chipSizeStyle.textStyle,
          { color: chipStateStyle.textColor, lineHeight: chipSizeStyle.height ? (chipSizeStyle.height / 2) : 16 },
          disabled && { textDecorationLine: 'line-through' },
        ]}
      >
        {content}
      </Text>
      {hasAmount && (
        <View style={styles.chipAmountHeader}>
          <Text
            style={[
              chipSizeStyle.amountText || styles.amountText,
              { color: chipStateStyle.textColor },
            ]}
          >
            {amount}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rounded.rounded_full,
    borderStyle: 'solid',
    borderColor: colors.grey200,
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  amountText: {
    ...textStyles.text_xs_regular,
    textAlign: 'center',
  },
  chipAmountHeader: {
    backgroundColor: colors.grey200,
    paddingHorizontal: paddings.p_8,
    borderRadius: rounded.rounded_full,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: paddings.p_8,
  },
});

export default CustomChip;
