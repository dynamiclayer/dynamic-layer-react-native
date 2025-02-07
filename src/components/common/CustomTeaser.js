import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, paddings, textStyles, rounded } from '../../style';

const CustomTeaser = ({
  size = 'md',
  title = 'Title',
  description = '',
  imageSource = null,
  disabled = false,
}) => {
  const sizeStyle = getSizeStyles(size);
  const placeholderImage = require('../../../assets/PlaceholderImage.png');

  const calculateNumberOfLines = (lineHeight) => {
    const maxLines = size === 'lg' ? Math.floor(sizeStyle.card.height / lineHeight) : 1;
    return maxLines;
  };

  const numberOfLines = calculateNumberOfLines(20);

  return (
    <View style={sizeStyle.card}>
      <View style={sizeStyle.imageWrapper}>
        <Image
          source={imageSource || placeholderImage}
          style={sizeStyle.image}
          resizeMode="cover"
        />
      </View>
      <View style={[sizeStyle.content, { height: description ? 72 : 52 }]}>
        <Text style={[sizeStyle.title, disabled && styles.disabledText]} numberOfLines={1}>
          {title}
        </Text>
        {description && (
          <Text style={[sizeStyle.description, disabled && styles.disabledText]} numberOfLines={numberOfLines}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

const getSizeStyles = (size) => {
  const commonStyles = {
    card: {
      borderRadius: rounded.rounded_xl,
      backgroundColor: colors.white,
      borderColor: colors.grey200,
      borderWidth: 1,
      overflow: 'hidden',
    },
    imageWrapper: {
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    content: {
      justifyContent: 'center',
      paddingHorizontal: paddings.p_16,
      paddingVertical: paddings.p_12,
    },
    title: {
      textAlign: 'left',
      ...textStyles.text_sm_bold,
      alignSelf: 'stretch',
    },
    description: {
      textAlign: 'left',
      ...textStyles.text_sm_regular,
      alignSelf: 'stretch',
    },
  };

  switch (size) {
    case 'md':
      return {
        ...commonStyles,
        card: {
          ...commonStyles.card,
          width: 160,
        },
        imageWrapper: {
          ...commonStyles.imageWrapper,
          height: 88,
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    case 'lg':
      return {
        ...commonStyles,
        card: {
          ...commonStyles.card,
          height: 152,
          flexDirection: 'row',
        },
        imageWrapper: {
          ...commonStyles.imageWrapper,
          paddingVertical: paddings.p_16,
          paddingLeft: paddings.p_16,
        },
        image: {
          ...commonStyles.image,
          borderRadius: rounded.rounded_md,
          width: 120,
          height: 120,
        },
        content: {
          ...commonStyles.content,
          flex: 1,
        },
      };
    default:
      return commonStyles;
  }
};

const styles = StyleSheet.create({
  disabledText: {
    textDecorationLine: 'line-through',
    color: colors.grey500,
  },
});

export default CustomTeaser;
