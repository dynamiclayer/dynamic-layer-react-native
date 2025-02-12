import React from 'react';
import { Modal, View, StyleSheet, Platform } from 'react-native';

const CustomButtonDock = ({
  direction = "vertical", // "vertical" oder "horizontal"
  firstButton,
  secondButton,
}) => {
  return (
    <Modal transparent={true} animationType="none" visible={true}>
      {/* Der umgebende Container sorgt dafür, dass der Dock unten angeordnet wird */}
      <View style={styles.modalContainer} pointerEvents="box-none">
        <View style={[styles.container, direction === "horizontal" ? styles.horizontal : styles.vertical]}>
          {firstButton && <View style={styles.button}>{firstButton}</View>}
          {secondButton && <View style={styles.button}>{secondButton}</View>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, // Dieses Element wird über alle anderen Elemente sichtbar
    justifyContent: 'flex-end', // Dadurch wird der Inhalt am unteren Rand positioniert
  },
  container: {
    width: '100%',
    backgroundColor: '#3434',
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 5,
  },
});

export default CustomButtonDock;
