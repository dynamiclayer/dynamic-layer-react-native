import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { colors, paddings } from '../../style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * CustomButtonDock Component
 * A container component that displays buttons in a docked position at the bottom of the screen.
 * Supports both vertical and horizontal button layouts.
 *
 * @param {string} direction - Layout direction for buttons: "vertical" or "horizontal"
 * @param {React.ReactNode} firstButton - The first button component to display
 * @param {React.ReactNode} secondButton - The second button component to display
 */
const CustomButtonDock = ({ direction = "vertical", firstButton, secondButton, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.overlay, { paddingBottom: insets.bottom, ...style }]} pointerEvents="box-none">
      <View style={styles.bottomContainer} pointerEvents="box-none">
        <View style={[styles.dock, direction === "horizontal" ? styles.horizontal : styles.vertical]}>
          {firstButton && (
            <View style={[direction === "horizontal" && { flex: 1 }]}>
              {firstButton}
            </View>
          )}
          {secondButton && (
            <View style={[direction === "horizontal" && { flex: 1 }]}>
              {secondButton}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

// Styles for the dock container and button layout
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'box-none',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    pointerEvents: 'box-none',
  },
  dock: {
    backgroundColor: colors.white,
    padding: 16,
    gap: paddings.p_16,
    pointerEvents: 'auto',
    borderTopWidth: 1,
    borderTopColor: colors.grey200,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vertical: {
    flexDirection: 'column',
  },
});

export default CustomButtonDock;
