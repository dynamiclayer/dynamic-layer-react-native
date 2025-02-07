import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomChip from '../../components/common/CustomChip';
import LoadingDots from '../../animations/LoadingDots';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import CustomTextArea from '../../components/common/CustomTextArea';

const CustomTextAreaScreen = () => {
    const [text, setText] = useState('');
    return (
        <ScrollView style={styles.container}>
            {/* STATE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>State</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <CustomTextArea
                    value={text}
                    onChangeText={setText}
                    placeholder="Schreibe hier etwas..."
                    numberOfLines={5}
                />
                <CustomTextArea
                    value={text}
                    onChangeText={setText}
                    numberOfLines={5}
                />
                <CustomTextArea
                    value={"May I know what is the noise level like in the area?"}
                    onChangeText={setText}
                    placeholder="Schreibe hier etwas..."
                    numberOfLines={5}
                />
                <CustomTextArea
                    value={text}
                    onChangeText={setText}
                    placeholder="Schreibe hier etwas..."
                    numberOfLines={5}
                    disabled={true}
                />
            </View>
        </ScrollView >
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

export default CustomTextAreaScreen