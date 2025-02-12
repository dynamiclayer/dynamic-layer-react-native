import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { colors, paddings } from '../../style';

const CustomButtonDock = ({ direction = "vertical", firstButton, secondButton }) => {
  return (
    <View style={styles.overlay} pointerEvents="box-none">
      <View style={styles.bottomContainer} pointerEvents="box-none">
        <View style={[styles.dock, direction === "horizontal" ? styles.horizontal : styles.vertical]}>
          {firstButton && (
            <View style={[styles.buttonWrapper, direction === "horizontal" && { flex: 1 }]}>
              {firstButton}
            </View>
          )}
          {secondButton && (
            <View style={[styles.buttonWrapper, direction === "horizontal" && { flex: 1 }]}>
              {secondButton}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

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
  buttonWrapper: {

  },
});

export default CustomButtonDock;
