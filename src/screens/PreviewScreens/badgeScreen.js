import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';

const BadgeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                {/* TODO Badge */}
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
});

export default BadgeScreen;