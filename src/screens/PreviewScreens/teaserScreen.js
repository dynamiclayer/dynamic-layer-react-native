import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTeaser from '../../components/common/CustomTeaser';

const TeaserScreen = () => {

    return (
        <ScrollView style={styles.container}>
            {/* Size */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Size</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <CustomTeaser
                    size="md"
                    title="Beispiel"
                    description="Beschreibung"
                />

                <CustomTeaser
                    size="lg"
                    title="Beispiel"
                    description="Description"
                />
            </View>

            {/* State */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>State</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { marginBottom: paddings.p_32, flexDirection: 'row', }]}>
                <CustomTeaser
                    size="md"
                    title="Beispiel"
                    description="Beschreibung"
                />

                <CustomTeaser
                    size="md"
                    title="Beispiel"
                    description="Beschreibung"
                    disabled={true}
                />
            </View>

            {/* Description */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Description</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { marginBottom: paddings.p_32, flexDirection: 'row', }]}>
                <CustomTeaser
                    size="md"
                    title="Beispiel"
                    description="Beschreibung"
                />

                <CustomTeaser
                    size="md"
                    title="Beispiel"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white
    },
    inputContainer: {
        gap: paddings.p_16,
        paddingBottom: paddings.p_32,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: paddings.p_16,
    },
    buttonWrapper: {
        width: 140,
    },
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default TeaserScreen