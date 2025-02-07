import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/common/CustomButton';
import CustomBottomSheet from '../../components/common/CustomBottonSheet';


const BottomSheetScreen = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = ["40%", "60%", "80%"];

    const handleSnapPress = (index) => {
        bottomSheetRef.current?.snapToIndex(index);
    };

    return (
        <View style={styles.screen}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                style={styles.container}
            >
                <View style={styles.content}>
                    <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
                    <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                    </Text>
                    {/* TODO Badge */}
                    <CustomButton text='Open Bottom Sheet' onPress={() => handleSnapPress(0)} />
                </View>
            </ScrollView>

            <CustomBottomSheet bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
                <CustomButton text='Close' onPress={() => bottomSheetRef.current?.close()} />
            </CustomBottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'flex-start', // Elemente bleiben oben
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white,
    },
    bottomSheetContainer: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_16,
        backgroundColor: colors.white,
    },
    content: {
        width: '100%', // Damit der Inhalt nicht gestreckt wird
    },
    paddingBottom8: {
        paddingBottom: paddings.p_8,
    },
    paddingBottom32: {
        paddingBottom: paddings.p_32,
    },
    greyText: {
        color: colors.grey500,
    },
});

export default BottomSheetScreen;
