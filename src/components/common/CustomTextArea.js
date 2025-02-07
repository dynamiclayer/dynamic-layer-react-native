import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors, paddings, rounded, textStyles } from '../../style';

const CustomTextArea = ({
  value,
  onChangeText,
  placeholder,
  numberOfLines = 4,
  disabled,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={numberOfLines}
        style={[
          styles.textArea,
          { height: 21 + 20 * numberOfLines },
          disabled && styles.disabledText,
        ]}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey200,
    borderRadius: rounded.rounded_md,
    paddingHorizontal: paddings.p_12,
    paddingVertical: 6,
  },
  focusedContainer: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 11,
  },
  textArea: {
    ...textStyles.text_sm_regular,
    textDecorationLine: 'none',
  },
  disabledText: {
    color: colors.grey500,
    textDecorationLine: "line-through",
  },
});

export default CustomTextArea;
