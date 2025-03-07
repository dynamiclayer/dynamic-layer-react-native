import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, paddings, rounded, textStyles } from "../../style";

/**
 * CustomCard Component
 * A versatile card component that can be used to display content with an icon, title, and description.
 */
const CustomCard = ({
  icon = {}, // Icon source - can be an image or React component
  title,          // Card title
  description,    // Card description
  size = "md",    // Card size: "md" (medium) or "lg" (large)
  state = "default", // Card state: "active", "default", or "disabled"
  onPress         // Function to call when card is pressed
}) => {
  // Determine if description should be shown based on content
  const shouldShowDescription = description !== undefined && description !== '';

  // Determine container style based on state and size
  // For active state, use active style; for default and disabled states, use disabled style
  const containerStyle =
  state === "active"
    ? size === "md"
      ? [styles.cardMdContainer, { borderWidth: 2, borderColor: colors.black }]
      : [styles.cardLgContainer, !shouldShowDescription && { height: 92 }, { borderWidth: 2, borderColor: colors.black }]
    : state === "default"
    ? size === "md"
      ? styles.cardMdContainer
      : [styles.cardLgContainer, !shouldShowDescription && { height: 92 }]
    : size === "md"
    ? styles.cardMdDisabled
    : [styles.cardLgDisabled, !shouldShowDescription && { height: 92 }];


  // Apply text styles - strikethrough for disabled state only
  const titleStyle = [styles.title, state === "disabled" && styles.strikeThroughText];
  const descriptionStyle = [styles.description, state === "disabled" && styles.strikeThroughText];
  // Text wrapper styles for medium and large sizes
  const textWrapperStyle = size === "md" ? styles.textWrapperMd : styles.textWrapperLg;
  // Handle icon - if icon is a React element, clone it and set color to black
  const iconElement = React.isValidElement(icon)
    ? React.cloneElement(icon, { color: colors.black })
    : icon;
    return (
      <Pressable style={containerStyle} onPress={onPress}>
        <View style={[styles.iconContainer, size === "lg" && { alignSelf: "flex-start" }]}>
          {iconElement}
        </View>
        <View style={[textWrapperStyle, size === "lg" && { alignSelf: "flex-start" }]}>
          <Text style={[titleStyle, {ellipsizeMode: "tail"}]} numberOfLines={1}>
            {title}
          </Text>
          {shouldShowDescription && (
            <Text style={descriptionStyle} numberOfLines={1}>
              {description}
            </Text>
          )}
        </View>
      </Pressable>
    );;
};

const styles = StyleSheet.create({
  // -------------------------------
  // Active Styles
  // -------------------------------
  cardMdContainer: {
    flexGrow: 1,
    width: 160,
    height: 64,
    gap: paddings.p_12,
    padding: paddings.p_12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  cardLgContainer: {
    flexGrow: 1,
    width: 160,
    height: 112,
    gap: paddings.p_16,
    padding: paddings.p_16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  // -------------------------------
  // Disabled Styles
  // -------------------------------
  // Used for both default and disabled states
  // The only difference is text strikethrough in disabled state
  cardMdDisabled: {
    flexGrow: 1,
    width: 160,
    height: 64,
    gap: paddings.p_12,
    padding: paddings.p_12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  cardLgDisabled: {
    flexGrow: 1,
    width: 160,
    height: 112,
    gap: paddings.p_16,
    padding: paddings.p_16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  // -------------------------------
  // Icon-Container
  // -------------------------------
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  // -------------------------------
  // Text Wrapper
  // -------------------------------
  textWrapperMd: {
    width: "100%",
    justifyContent: "center",
  },
  textWrapperLg: {
    width: "100%",
    justifyContent: "center",
  },
  // -------------------------------
  // Text-Styles
  // -------------------------------
  title: {
    ...textStyles.text_sm_semibold,
    textAlign: "left",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  description: {
    ...textStyles.text_sm_regular,
    color: colors.black,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  // Strikethrough text (only applied in the disabled state)
  strikeThroughText: {
    textDecorationLine: "line-through",
    color: colors.grey500,
  },
});

export default CustomCard;
