import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomChip from '../../components/common/CustomChip';

const ChipScreen = () => {
    const [inputValue, setInputValue] = useState('Input Field');

    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <View style={styles.buttonRow}>
                    <CustomChip
                        content='Chip'
                        hasAmount={true}
                        amount={10}
                    />

                    <CustomChip
                        content='Chip'
                    />
                </View>
            </View>

            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <View style={styles.buttonRow}>
                    <CustomChip
                        content='Chip'
                    />

                    <CustomChip
                        content='Chip' 
                        active={true}
                    />

                    <CustomChip
                        content='Chip'
                        disabled={true}
                    />
                </View>
            </View>

            {/* SIZE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <View style={styles.buttonRow}>
                    <CustomChip
                        size={3}
                        content='Chip'
                        hasAmount={true}
                        amount={10}
                    />

                    <CustomChip
                        size={2}
                        content='Chip'
                        hasAmount={true}
                        amount={10}
                    />

                    <CustomChip
                        size={1}
                        content='Chip'
                        hasAmount={true}
                        amount={10}
                    />
                </View>
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
});

export default ChipScreen