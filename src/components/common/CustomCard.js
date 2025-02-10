import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, paddings, rounded, textStyles } from "../../style";

const CustomCard = ({
  iconSource = {},
  title,
  description,
  size = "md", // "md" oder "lg"
  state = "default", // State: "active", "default" oder "disabled"
  showDescription = true, // Standardmäßig aktiv
  onPress
}) => {
  // Bestimme den Container-Stil:
  // Im active-Zustand wird der aktive Style genutzt,
  // In default und disabled wird der Container-Style wie bei disabled angewandt.
  const containerStyle =
    state === "active"
      ? size === "md"
        ? styles.cardMdContainer
        : [styles.cardLgContainer, !showDescription && { height: 92}]
      : size === "md"
      ? styles.cardMdDisabled
      : [styles.cardLgDisabled, !showDescription && { height: 92}];

  // Beim Text: Nur im disabled-Zustand wird durchgestrichen.
  const titleStyle = [styles.title, state === "disabled" && styles.strikeThroughText];
  const descriptionStyle = [styles.description, state === "disabled" && styles.strikeThroughText];

  // Text-Wrapper (für md bzw. lg)
  const textWrapperStyle = size === "md" ? styles.textWrapperMd : styles.textWrapperLg;

  // Icon: Falls iconSource ein React-Element ist, setzen wir per cloneElement die Farbe auf Schwarz.
  const iconElement = React.isValidElement(iconSource)
    ? React.cloneElement(iconSource, { color: colors.black })
    : iconSource;

    return (
      <Pressable style={containerStyle} onPress={onPress}>
        <View style={[styles.iconContainer, size === "lg" && { alignSelf: "flex-start" }]}>
          {iconElement}
        </View>
        <View style={[textWrapperStyle, size === "lg" && { alignSelf: "flex-start" }]}>
          <Text style={[titleStyle, {ellipsizeMode: "tail"}]} numberOfLines={1}>
            {title}
          </Text>
          {showDescription && (
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
  // Active Styles (voll aktiv)
  // -------------------------------
  cardMdContainer: {
    gap: paddings.p_12,
    padding: paddings.p_12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    width: 160,
    height: 64,
    borderWidth: 2,
    borderColor: colors.black,
  },
  cardLgContainer: {
    gap: paddings.p_16,
    padding: paddings.p_16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    width: 160,
    height: 112,
    borderWidth: 2,
    borderColor: colors.black,
  },
  // -------------------------------
  // Disabled Styles (wie bisher)
  // -------------------------------
  // (Sowohl für default als auch disabled wird hier der Container-Stil genutzt –
  // der Unterschied zeigt sich nur beim Text: bei disabled wird der Text durchgestrichen.)
  cardMdDisabled: {
    gap: paddings.p_12,
    padding: paddings.p_12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    width: 160,
    height: 64,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  cardLgDisabled: {
    gap: paddings.p_16,
    padding: paddings.p_16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderRadius: rounded.rounded_lg,
    width: 160,
    height: 112,
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
  // Durchgestrichener Text (nur im disabled-Zustand angewandt)
  strikeThroughText: {
    textDecorationLine: "line-through",
    color: colors.grey500,
  },
});

export default CustomCard;
