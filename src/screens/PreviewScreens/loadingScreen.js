import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import LoadingDots from '../../animations/LoadingDots';

const LoadingScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomIcon width={120} height={120} fill={colors.grey200}/>
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <View style={styles.loadingContainer}>
                    <LoadingDots color={colors.black} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white,
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
    inputContainer: {
        gap: paddings.p_16,
    },
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default LoadingScreen;