import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors, paddings, rounded, textStyles } from '../../style';

const NotificationBadge = ({ size = "md", notifications, positioning = true, ...props }) => {
  const [badgeWidth, setBadgeWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setBadgeWidth(width);
  };

  const renderBadge = (style, transform) => (
    <View style={[style, { transform }]} onLayout={handleLayout}>
      <Text style={styles.notificationText}>{notifications}</Text>
    </View>
  );

  return (
    <View style={{ position: "absolute", ...props }}>
      {notifications > 0 && (
        size === "md" ? renderBadge(styles.notificationBadgeMD, positioning ? [{ translateX: (badgeWidth / 2) + 4 }] : [{ translateX: 0 }])
        : size === "sm" ? <View style={[styles.notificationBadgeSM, { transform: [{ translateX: 8 }] }]} />
        : null
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBadgeMD: {
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    justifyContent: 'center',
    paddingHorizontal: paddings.p_8,
    paddingVertical: paddings.p_0,
    alignItems: 'center',
    width: "auto",
  },
  notificationBadgeSM: {
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    justifyContent: 'center',
    alignItems: 'center',
    height: 8,
    width: 8,
  },
  notificationText: {
    ...textStyles.text_xs_semibold,
    color: colors.white,
    textAlign: 'center',
  },
});

export default NotificationBadge;
