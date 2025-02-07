import React, { useMemo } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { colors, paddings } from "../../style";

const CustomBottomSheet = ({ bottomSheetRef, snapPoints, children, viewStyle }) => {
  const isSheetOpen = useMemo(() => snapPoints?.length > 0 && snapPoints[0] !== 0, [snapPoints]);

  return (
    <View style={styles.container}>
      {isSheetOpen && <Pressable style={styles.overlay} onPress={() => bottomSheetRef.current?.close()} />}
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetView style={[styles.bottomSheetContainer, viewStyle]}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    opacity: 0.5,
    top: -100
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: paddings.p_16,
    paddingVertical: paddings.p_16,
    backgroundColor: colors.white,
  },
});

export default CustomBottomSheet;
